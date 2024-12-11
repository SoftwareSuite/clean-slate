import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import userRouter from "./routes/userRoute.js";


const PORT = process.env.PORT || 5000;
const app = express();


mongoose.connect(process.env.MONGO).then(()=> {
    console.log("connected to mongoDB successfully")
}).catch(err=>console.log(err))

app.use(express.json());
app.use(cors())

app.get('/',(req, res) => {
    res.json({message: "server or api is working"})
})

app.use("/api/user", userRouter)

app.listen(PORT, ()=> {
    console.log("server listing on port "+PORT) 
});