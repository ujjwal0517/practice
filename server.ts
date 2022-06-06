// import { response } from "express";

const express  = require('express');
const env = require('dotenv')
const mongoose = require('mongoose')
env.config();
const DatabaseUri:any = process.env.URI;
const app = express();
mongoose.connect(DatabaseUri ,{ useNewUrlParser:true })
.then(()=>{console.log("database connected")})
.catch((err:Error)=>{
 console.log('unable to Connect to Database')
})





app.listen(process.env.PORT, ()=>console.log(`Server started @ ${process.env.PORT}`))