import { MongoClient } from "mongodb";
import assert from "assert";

const url = "mongodb://localhost:27017";
const dbName = 'adam';
const client = new MongoClient(url);

client.connect(()=>{
    console.log("Connect Successfully to server");
    const db = client.db(dbName);
    findDocuments(db,()=>{
        client.close();
    });
});

const findDocuments = function(db,callback) {
    const collecton = db.collection('users');
    collecton.find({}).toArray(function(err,docs){
        assert.equal(err,null);
        console.log("Found the following");
        console.log(docs)
        callback(docs);
    });
};