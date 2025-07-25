import mongoose from "mongoose";
import { ENV } from "./env.js";


export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI);
        console.log(`Connected to Database Sucessfully✅`);
        
    } catch (error) {
        console.log(`Error Connecting to MONGODB`);
        process.exit(1);
    }
}