import express from 'express';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';

const app = express();

app.get("/", (req,res)=>{res.send(`Hello from Server`)});


const startServer = async () => {
  try {
    await connectDB();

   
    if (ENV.NODE_ENV !== "production") {
     app.listen(ENV.PORT, () => console.log("Server is up and running on PORT:", ENV.PORT));
    }
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();