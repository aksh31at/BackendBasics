const {MongoClient}= require('mongodb');

const url="mongodb+srv://akshat31at:akshatA213@day12.jliuzw3.mongodb.net/";
const client= new MongoClient(url);

const dbName="day12";

async function main(){
    await client.connect();
    console.log("Connected to database");
    const db= client.db(dbName);
    const collection = db.collection('BACKEND');

    return 'done.';
}

main()
.then(console.log)
.catch(console.error)   
.finally(() => client.close());