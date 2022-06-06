import {Request, Response, Router} from "express";
const router = Router();
const students = require('../student/student')
router.get('/', (req:Request, res:Response)=>{
    res.status(200).json(students)
})

module.exports = router;