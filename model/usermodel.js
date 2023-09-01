const mongoose = require('mongoose');
const db = require('../config/db');

const userSchema = new mongoose.Schema({
    fid: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique:false,
    },
    age: {
        type: Number,
        required: true,
        unique: false,
    },
    bio: {
        type: String,
        required: true,
        unique:false,
    },
    interests: {
        type: String,
        required: true,
        unique: false,
    },
    gender: {
        type: String,
        required: true,
        unique: false,
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
    }
   
    

});

const UserModel = new mongoose.model('user', userSchema)
module.exports=UserModel;