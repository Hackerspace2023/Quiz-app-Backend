import express from 'express';
import dotenv from "dotenv"
import connectDB from './Utils/db.js';
dotenv.config()

const app = express();

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