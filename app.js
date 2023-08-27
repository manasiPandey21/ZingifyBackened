const express = require('express');
const app = express();
const bodyparser=require("body-parser");
const userRouter=require('./routers/userroutes');
app.use(bodyparser.json());
app.use('/',userRouter);
module.exports = app;