const MongoClient = require('mongodb').MongoClient;
const {dbUser, dbPassword, dbName,dbHost} = require('../config');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const DB_NAME = dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${dbHost}/${DB_NAME}?retryWrites=true`;

module.exports = ( () => {
    let instance = null;
    let isDisconnecting = false;

    function connect() {
        return new Promise((resolve, reject)=>{
            MongoClient.connect(MONGO_URI, { useNewUrlParser: true }, function(err, client) {
                if (err) { reject(err); }
                console.log("Conectado satisfactoriamente al servidor de Mongo!");
                instance = client;
                resolve(client.db(DB_NAME));
            });
        });
    }

    function disconnect(){
        if (instance && !isDisconnecting){
            isDisconnecting = true;
            console.log("Desconectando instancia de Mongo");
            return new Promise((resolve, reject)=>{
                instance.close((err, result)=>{
                    if (err) { reject(err); isDisconnecting=false; return; }
                    console.log("Instancia de Mongo desconectada!");
                    resolve();
                });
            })
        }
    }

    return {
        connect,
        disconnect,
        instance: () => instance,
    }
})();