const findDocuments = function(db,callback){

    const collection =db.collection('contatos');

    collection.find({}).toArray(function(err, docs){
        assert.equal(err, null);
        console.log("Foram encontrados os seguintes docs: ");
        console.log(docs)
        callback(docs);
    });
};
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://aplicacao:dswa5dswa5@cluster0.d41zx.mongodb.net/ifsp?retryWrites=true&w=majority';

const dbName = 'ifsp';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, function (err, client){
    assert.equal(null, err);
    console.log("Aluno: Nadjila Tejo");
    console.log("Servidor conectado!");

    const db = client.db(dbName);

    findDocuments(db, function(){
        client.close()
    });

});
