import dotenv from "dotenv";
import connectDB from "./db/dbconnection.js";
import app from "./app.js";

dotenv.config({
   path: "./env"
})

connectDB()
.then(()=> {
   app.listen(process.env.PORT || 3000, ()=>{
      console.log(`Server is running ${process.env.PORT}`);
   })
})
.catch((err)=>{
   console.log("Failed To Precess BRO ",err)
})








// (async ()=>{
//    try{
//       mongoose.connect(`${process.env.MONGODB_URI}`)
//    }
//    catch (error){
//       console.error("error :",error);
//    }
// })