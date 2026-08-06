
import dotenv from "dotenv"

import mongoose from 'mongoose';
import connectDB from './db/index.js';

dotenv.config(
    {
        path : "./env"
        // yaha par env wali file ka path dete h ye imprt ka syntax h
    }
)

connectDB();