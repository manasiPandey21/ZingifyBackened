const mongoose = require('mongoose');
const db = require('../config/db');

const userSchema = new mongoose.Schema({
    // fid: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        unique: true,
    },
    bio: {
        type: String,
        required: true,
        unique: true,
    },
    interests: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
    }
   
    

});

const UserModel = new mongoose.model('user', userSchema)
module.exports=UserModel;