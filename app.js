import express from "express"
import dotenv from "dotenv";
dotenv.config();

const app = express()

app.listen(process.env.FRONTPORT, ()=>{
    console.log("Frontend server listening on port", process.env.FRONTPORT);
})