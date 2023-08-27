const app = require('./app'); 
const port = 2500;
const db=require("./config/db");
const UserModel=require("./model/usermodel.js");
app.get('/', (req, res) => {
    res.send("Zingify");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Zingify');
    console.log('Connected to the database!');
    // Do other database-related operations here
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

connectToDatabase();

//mongoose.connect('mongodb://localhost:27017/e-comm');
const userSchema = new mongoose.Schema({
    // fid: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    name: {
        type: String,
        required: true,
        unique: false,
    },
    age: {
        type: Number,
        required: true,
        unique:false,
    },
    bio: {
        type: String,
        required: true,
        unique: false,
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
