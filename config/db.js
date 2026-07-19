import mongoose from "mongoose";
import dontenv from "dotenv";
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first")
dns.setServers(["8.8.8.8","1.1.1.1"])
dontenv.config();
//load.env variable

async function connectDB() {

    try{
        await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb is connected ")
    }catch(error){
        console.log("Database connection fails")
        console.log(error)
    }
   

}
export default connectDB;