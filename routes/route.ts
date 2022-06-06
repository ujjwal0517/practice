import express, {Request, Response} from 'express';
import { ModuleResolutionKind } from 'typescript';
const router = express.Router();
const students = require('../student/student')
router.get('/', (req:Request, res:Response)=>{
    res.status(200).json(students)
})

module.exports = router;