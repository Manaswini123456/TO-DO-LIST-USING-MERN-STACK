import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const USERNAME = process.env.DB_USERNAME
const PASSOWRD = process.env.DB_PASSWORD

const Connection = ()=>{

    mongoose.set("strictQuery", false);

    const MONGODB_URI = `mongodb+srv://root:root@cluster0.qcoffss.mongodb.net/todos`
    //const URL_CONNECTIVITY = 'mongodb://localhost:27017'
    mongoose.connect(MONGODB_URI,{
        useNewUrlParser : true
    })

    mongoose.connection.on('connected',()=>{
        console.log('Database connected successfully!')
    })

    mongoose.connection.on('disconnected',()=>{
        console.log('Database disconnected');
    })

    mongoose.connection.on('error',()=>{
        console.log('Error while connecting with the databse',error.message);
    })

}

export default Connection;
