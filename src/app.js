import express from "express";
import cors from "cors"

const app = express();

app.use(cors({
   origin: process.env.CORS_ORIGIN,
   Credentials: true
}))

app.use(express.json({limit:"16kb"}))

//Router
import userRouter from "./routes/user.router.js"

//Routes declariton
app.use("/api/v1/users",userRouter)


export default app;