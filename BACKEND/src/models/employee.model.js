import express from "express"
import mongoose from "mongoose"

const empSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    position:{
        type:String,
    },
    department:{
        type:String,
    },
    salary:{
        type:Number,
    },
    joinDate:{
        type:Date,
    },
    image:{
        type:String,
        default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
    }
})

const empModel = mongoose.model("Employee" , empSchema);

export default empModel;