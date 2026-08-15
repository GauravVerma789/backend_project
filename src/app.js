import express from 'express'
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({limit:"8kb"})) // express mai jo json se data aa rha h uska size bata te h maximum

// app.use middle ware ko handle karne k liye hota h


app.use(express.urlencoded({limit:"8kb"}))
// ye url ko samjh ke decode karne k liye use hota h

app.use(express.static("public"))
// mere hi server mai store karne k liye


app.use(cookieParser())
// bas cookieparser use karne k liye 

// routes dalenge ab

import userRouter from "./routes/user.routes.js"

app.use("/api/v1/users",userRouter)
export { app }