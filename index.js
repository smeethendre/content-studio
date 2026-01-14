import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import express from "express";
dotenv.config();

const app = express();

const startServer = async () => {
  try {
    const dbConnection = await connectDB();
    app.listen(process.env.port || 5000, () => {
      console.log(`app running on port ${process.env.port}`);
    });
  } catch (error) {
    console.error("couldn't port the app", error);
    process.exit(1);
  }
};

startServer();
