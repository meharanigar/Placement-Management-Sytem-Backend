import mongoose from "mongoose";
import dontenv from "dotenv";

//load.env variable

async function connectDB() {


    try{
        await mongoose.connect("mongodb+srv://mehar_nigar:mehar_nigar@mycluster.spr9dbg.mongodb.net/placementDB?appName=MyCluster")
    console.log("mongodb is connected ")
    }catch(error){
        console.log("Database connection fails")
        console.log(error.message)
    }
   

}
export default connectDB;