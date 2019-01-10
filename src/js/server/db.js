//var mongo=require('mongodb').MongoClient;
var mongoose = require('mongoose')
var mongo = require('mongodb');
const Schema=mongoose.Schema;

const theSchema= new Schema({
    Name: {type: String},
    Surname: {type: String},
    age: {type:Number},

}, {
    versionKey: false,
});

const Developer=mongoose.model("mydb", theSchema)


exports.setUpConnection=()=> {

    console.log("connecting...")
    mongoose.connect(`mongodb://localhost/mydb`);

}

exports.GetDevoloper=()=>{
    console.log("Get Todo")

    return  Todo.find().sort({"age":1});
}

exports.Count=(i)=>{
    return  i=Todo.countDocuments()
}

exports.PostDevoloper=(data)=> {


    const todo=new Todo({

        title: data.title,
        deadLine: data.deadLine,
    })
    console.log("Post todo", data)
    return todo.save()

}



