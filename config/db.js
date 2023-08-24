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

