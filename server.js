import express, { request, response } from "express";
import studentRoutes from "./routes/studentRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
// old version:
// const express = require("express");

const app = express();
//middleware:convert the json to object
app.use(express.json());
connectDB()
dotenv.config();


//studentRoutes
// app.use("/students",studentRoutes);
app.use("/students",studentRoutes);


app.listen(8000,()=>{
    console.log("server is started at 8000");

}); 

// let students=[{
//     id:101,
//     studentName:"mehar",
//     email:"mehar@gmail.com",
//     Branch:"CAI",
//     Cgpa:9

// }

// ]

// app.get("/",(req,res)=>{
//     res.send("this is my backend")
// });

// app.get("/students",(req,res)=>{
//     res.json(students);
// });
// //Defining the r

