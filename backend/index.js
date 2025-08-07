import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import storeRoute from "./routes/storeRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}))

const PORT = process.env.PORT;
const BACKEND_URL = process.env.BACKEND_URL ;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY,
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})


app.route("/",storeRoute);

try{
    mongoose.connect(BACKEND_URL,{
        serverSelectionTimeoutMS: 30000, 
    });    
    console.log("MongoDB connected successfully!");
}
catch(err){
    console.error("Error conneting to MongoDB:", err);
}
