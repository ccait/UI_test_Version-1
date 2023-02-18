const express = require('express');
const router = express.Router();
const Schemas = require('../modules/Schemas.js');
const mongoose =require('mongoose');
mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;

let collectionModel;

router.get('/addsampletest', async (req, res) => {
    const data = {
        test:'teststst'
    };
    const newData = new Schemas.Test(data);

    try{
        await newData.save( async (err, newDataResult) => {
            console.log('New Data Created');
            res.end('NewDataCreated!');
        });
    } catch(err){
        console.log(err);
        res.end('Data not added');
    }
});



// 
router.post('/addTest', async (req, res) =>{
    const inp = req.body.testInput;
    Schemas.Test.create({ test: inp }, function (err, small) {
        if (err) return handleError(err);
        res.redirect('/test');
        console.log('Posted');
      });
    //const test1 = await Schemas.Test.findOne({test:'testOriginal'}).exec();
    
});
// return all Collections
router.get('/test', async (req, res) => {
    const nameList = await
    mongoose.connection.db.listCollections().toArray((err, names)=>{
        if (err){
            console.log(err);
        } 
        if(names) {
            res.end(JSON.stringify(names));
            console.log(names);
        } else{
            res.end('no test retrieved');
        }
    });
});
// Create a collection with given name
let dataModel;
router.post('/createSchema', async(req, res) => {
    const name = req.body.CollectionNameInput;
    const input = req.body.CollectionSchemaInput;
    console.log(input);
    console.log(name);
    const scc = input.split(' ');
    console.log(scc);
    var newSchema = {};
    for(var  i = 0; i < scc.length; i++) {
        newSchema[scc[i]] = {
            type: 'String',
            index: true
        }
    };
    const collectionName ={collection: name};
    console.log(newSchema);
    const newModel = mongoose.model(name,new Schema(newSchema, collectionName));
    collectionModel = newModel;
    dataModel = scc;
    newModel.createCollection().then(function(coll){
        //if (err) throw err;
        console.log("collection created");
        console.log(coll);
        res.redirect('/hpcr/createDB');
    }).catch(err =>{
    console.log(err);
    res.redirect('/hpcr/createDB');
    res.end('Data not added');})
});
// insert the data
router.post('/createTB', async(req, res) => {
    console.log(req.body);
    let collectionData = [];
    let data = req.body.data;
    let fields = req.body.fields;
/*     {
        fields: [ 'a', 'b', 'c' ],
        data: [ 'John a 5', 'Rose b 6', 'Sam c 8' ]
      }   */
      for (let str of data){
        let dataArr = str.split(' ');
        let obj = {};
        for ( let i = 0; i < dataArr.length; i++){
            obj[fields[i]] = dataArr[i];
        }
        collectionData.push(obj);
      };
      console.log('collection data', collectionData);
      collectionModel.insertMany(collectionData, function(err, docs) {
        if (err) {console.log('insert error', err);}
        console.log('insert input collection successful');
        console.log(docs);
      });

    res.end('create tb post success');
});
router.post('/getModel', async(req,res) =>{
    console.log('get model', dataModel);
    res.json(dataModel);
});
module.exports = router;