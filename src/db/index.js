import mongoose from "mongoose";

import express from 'express';

import { DB_NAME } from "../constant.js";

const connectDB = async ()=>{
    try {
        const conectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // ye mongoose obect return karta h 
        // async await isliye lagaya ku ki data aane mai time lag ta h 
        // try catch errors ko handle karne k liye lagaya h
        
        console.log(`mongobd conencted !! DB host : ${conectionInstance.connection.host} `);
        
    } catch (error) {
        console.log("connection error : ",error)
        process.exit(1)
    }
}

export default connectDB