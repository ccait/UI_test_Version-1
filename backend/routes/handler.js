const express = require('express');
const router = express.Router();
const Schemas = require('../modules/Schemas.js');
const mongoose =require('mongoose');
mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;

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

    // this code will get all tweets  - SELECT FROM TABLE
    //const userTweets = await tweets.find({}, (err, tweetData) => {

    // this code will get all tweets and join the user table - SELECT FROM TABLE JOIN a ON b
    /* const data = await test.find().exec((err, testData) => {
        if (err) throw err; //more error handle
        if (testData) {
            res.end(JSON.stringify(testData));
            console.log('got');
        } else {
            res.end('no test retrieved');
        }
    }); */
});


router.post('/addTest', async (req, res) =>{
    const inp = req.body.testInput;
    Schemas.Test.create({ test: inp }, function (err, small) {
        if (err) return handleError(err);
        res.redirect('/test');
        console.log('Posted');
      });
    //const test1 = await Schemas.Test.findOne({test:'testOriginal'}).exec();
    
});
router.post('/createSchema', async(req, res) => {
    const name = req.body.CollectionNameInput;
    const input = req.body.CollectionSchemaInput;
    console.log(input);
    console.log(name);
    const inn = '{"name": "String","documentation_time": "String","age": "String"}';
    const scc = JSON.parse(inn);
    
    const newSchema = new Schema(
        {scc}
    );
    
    const newModel = mongoose.model(name, newSchema);
    newModel.createCollection().then(function(err, res){
        if (err) throw err;
        console.log("collection created");
        res.end();
    });

});

module.exports = router;