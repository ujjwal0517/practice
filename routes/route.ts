const express = require("express")
const router = express.Router();
const students = require('../student/student')
router.get('/', (req:Request, res:Response)=>{
    res.status(200).json(students)
})

module.exports = router;
console.log("This is Node.js world")
