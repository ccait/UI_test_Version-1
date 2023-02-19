const express = require('express');
const router = express.Router();
const mongoose =require('mongoose');
mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;

let collectionModel;
//test route that add a sample data
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



// return all Collections
router.get('/tablesName', async (req, res) => {
    let tablenames =[];
    const nameList = await
    mongoose.connection.db.listCollections().toArray((err, names)=>{
        if (err){
            console.log(err);
        } 
        if(names) {
            //res.end(JSON.stringify(names));
            //console.log(names);
            for (let name of names){
                tablenames.push(name.name);
            }
            console.log(tablenames);
            
            res.end(JSON.stringify(tablenames));
        } else{
            res.end('no test retrieved');
        }
    });
});


// Create a collection with given name
let dataModel;
router.post('/create_Schema', async(req, res) => {
    const name = req.body.CollectionNameInput;
    const input = req.body.CollectionSchemaInput;
    //console.log(input);
    //console.log(name);
    const scc = input.split(' ');
    console.log(scc);
    var newSchema = {};
    for(var  i = 0; i < scc.length; i++) {
        newSchema[scc[i]] = {
            type: 'String',
            //index: true
        }
    };
    const collectionName ={collection: name};
    console.log(newSchema);
    const newModel = mongoose.model(name,new Schema(newSchema, collectionName, { versionKey: false }));
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
router.post('/create_table', async(req, res) => {
    //console.log(req.body);
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
        //console.log(docs);
      });

    res.end('create tb post success');
});
// return the model from previous input
router.post('/get_model', async(req,res) =>{
    console.log('get model', dataModel);
    res.json(dataModel);
});



// return documents in the given collection
router.post('/get_fields', async(req,res) =>{
    const collName = req.body.value;
    console.log('get table:', collName);
    const collection = mongoose.connection.db.collection(collName);
    collection.find({},{ projection: { _id: 0, __v:0}}).limit(10).toArray((err, documents) =>{
        console.log('return document:',documents);
        res.json(documents);
    });

});

//
router.post('/create_algo', async(req, res) => {
    console.log(req.body);
    let data = req.body.data;
    let fields = req.body.fields;
    let name = req.body.name.value + '_algo';
    let schema ={};
    //construct Schema Model in mongoose
    for (let i = 0; i < fields.length; i++){
        schema[fields[i]] = {
            type: 'String'} };
    
    const algoModel = mongoose.model(name, new Schema(schema, {collation: name, versionKey: false }));
    //construct datas
    let algoData = [];
    for (let i = 0; i < data.length; i++){
        let obj ={};
        obj[fields[i]] = data[i];
        algoData.push(obj);
    }
    console.log('algo data:', algoData);
    console.log('algo schema', schema);
    algoModel.insertMany(algoData, function(err, docs){
        if (err) {console.log('algo insert err:', err)};
        console.log('insert algo data success');
    });
    res.end('create algo table sucess');

});

//delete all collections:
router.delete('/delete_all_collections', async(req, res) =>{
    console.log('DELETE all table');
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    //delete action:
    collections
    .map((collection) => collection.name)
    .forEach( async(collectionName) => {
        db.dropCollection(collectionName);
    });
    res.sendStatus(200);
});

module.exports = router;