import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

 const connection = () =>{
    mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true});
    mongoose.connection.on('connected',() =>{ console.log('connected to MongoDB');})
    mongoose.connection.on('disconnected',() =>{
        console.log('disconnected to MongoDB')
    });
    mongoose.connection.on('error',()=>{
        console.log('error in DB connection',error.message);
    })
}

export default connection;

