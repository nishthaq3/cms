import "dotenv/config"
import dotenv from "dotenv";
dotenv.config()
import app from "./app.js"
import connectDB from "./config/db.js";
import { cloud } from "./config/cloudinary.js";
cloud()
connectDB();

const server = http.createServer(app);
const io= new server(server,{
    cors: {
        origin: "*",
        credentials: true
    }
});

registerSocketHandlers(io);

server.listen(PORT,()=>{
    console.log(`Server running on `)
})

const PORT = process.env.PORT; 

app.listen(PORT,(err,data)=>{
    console.log(`Listening on PORT ${PORT}`);
})