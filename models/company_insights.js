const mongoose = require('mongoose');

const Company=new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    show:{
        type:Boolean,
        default: true
    },
     
    // having array of students taking schema of placed_students
    

},{timestamps: true})