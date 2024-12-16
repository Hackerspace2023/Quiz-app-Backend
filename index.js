import express from 'express';
import dotenv from "dotenv"
import connectDB from './Utils/db.js';
import UserRouter from './Routes/userRoutes.js';
dotenv.config()

const app = express();

app.use(express.json());
app.use("/api/user",UserRouter)

const PORT = process.env.PORT || 8000;

connectDB()
.then(()=>{
    app.listen(PORT , ()=>{
        console.log('Server is running on port ', PORT);
        
    })
})
.catch((error)=>{
    console.log('Connection failed',error);
})