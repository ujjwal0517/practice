import * as mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    class:{
        type: String,
        required: true,
    },
    roll:{
        type: Number,
        require: true
    },
    address:{
        temporary_address:{
            type: String
        },
        permanent_address:{
            type: String

        }
    }
})
module.exports = mongoose.model('Student', studentSchema)