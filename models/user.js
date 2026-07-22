import mongoose from "mongoose";
import Student from "./Student";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:["admin","student"],
        default:"student"
    },

});