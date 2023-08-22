const mongoose = require("mongoose");


const connection =async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Zingify')
    console.log("MongoDB connected")
    }catch(error){
        console.log("connection failed");
    }
};
module.exports = connection;


// const {MongoClient} = require('mongodb')
// const url= 'mongodb://localhos:27017';
// const databaseName='Zingify'
// const client= new MongoClient(url);

// async function connection()
// {
//     let result = await client.connect();
//     db= result.db(databaseName);
//     return db.collection('users');
  
// }
// const x = async ()=>{
//     let data = await connection();
//     console.log("Mongodb connected");
// }

// module.exports= x;
