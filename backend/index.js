import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';


const app = express();
const port = 3000;


mongoose.connect(process.env.MONGO).then(()=> {
    console.log("connected to mongoDB successfully")
}).catch(err=>console.log(err))

app.get('/',(req, res) => {
    res.json({message: "server or api is working"})
})

app.listen(port, (req, res)=> {
    console.log("server listing on "+port)
});