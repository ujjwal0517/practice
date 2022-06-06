<<<<<<< HEAD
console.log("This is Node.js world")
const express = require("express")
=======
import express, {Request, Response} from "express";
>>>>>>> ed21a7d7c0540c963f77d44e7255082a6a891e78
const router = express.Router();
const students = require('../student/student')
router.get('/', (req:Request, res:Response)=>{
    res.status(200).json(students)
})

module.exports = router;
<<<<<<< HEAD
=======
console.log("This is Node.js world")
>>>>>>> ed21a7d7c0540c963f77d44e7255082a6a891e78
