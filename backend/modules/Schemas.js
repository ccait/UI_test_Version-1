const mongoose =require('mongoose');
mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;

const testSchema = new Schema({
    test: {type: String, required: true}
});

const Test = mongoose.model('test', testSchema,'test');
const mySchema = {'Test': Test};
module.exports = mySchema;