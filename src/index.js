
import dotenv from "dotenv"

import mongoose from 'mongoose';
import connectDB from './db/index.js';
import { app } from "./app.js";

dotenv.config(
    {
        path : "./env"
        // yaha par env wali file ka path dete h ye imprt ka syntax h
    }
)

connectDB() // ye hamesha ek promice return karta h ku ki ye ek asyc await function h
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`port is running on ${process.env.PORT}` )
    })
})
.catch((err)=>{
    console.log("MongoDB error Connection " , err)
})