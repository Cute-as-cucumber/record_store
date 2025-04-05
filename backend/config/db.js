//this file is to connect backend to MangoDB

import mongoose from "mongoose";

const connectDB = async() => { 
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected" ${conn.connection.host}`);
    } catch (error){
        console.log(`Error: ${error.message}`);
        //shut down app with an error code
        process.exit(1);
    }
};

export default connectDB;