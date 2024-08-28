import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
config();
import cors from "cors";
import cookieParser from "cookie-parser";
import { storyRoutes } from "./routes/storyRoute.js";

const PORT = process.env.PORT;
const FRONTEND_URL_PROD = process.env.FRONTEND_URL_PROD;
const FRONTEND_URL_DEV = process.env.FRONTEND_URL_DEV;

const app = express();

const isProduction = process.env.NODE_ENV === 'production';

// CORS options based on environment
const corsOptions = {
  origin: isProduction ? FRONTEND_URL_PROD : FRONTEND_URL_DEV,
  credentials: true, // Allow credentials such as cookies to be sent
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.static("./public"));

// Routes
app.get("/", (req, res) => {
  res.status(200).json("Backend Working, Happy Coding");
});
app.use("/api/stories", storyRoutes);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connected to Database");

    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(`Error connecting to the database: ${err.message}`);
    throw new Error(`Error connecting to the database: ${err.message}`);
  }
};

connect();

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
