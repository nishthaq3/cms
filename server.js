import "dotenv/config"
import dotenv from "dotenv";
dotenv.config()
import app from "./app.js"
import connectDB from "./config/db.js";
import { cloud } from "./config/cloudinary.js";
cloud()
connectDB()

const PORT = process.env.PORT; 

app.listen(PORT,(err,data)=>{
    console.log(`Listening on PORT ${PORT}`);
})