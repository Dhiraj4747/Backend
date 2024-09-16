import dotenv from "dotenv";
import connectDB from "./db/dbconnection.js";
import { DB_NAME } from "./constants.js";

dotenv.config({
   path: "./env"
})

connectDB();

// (async ()=>{
//    try{
//       mongoose.connect(`${process.env.MONGODB_URI}`)
//    }
//    catch (error){
//       console.error("error :",error);
//    }
// })