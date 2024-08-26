import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { storyRoutes } from './routes/storyRoute.js';
const PORT = process.env.PORT;

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/public', express.static('public'));

// routes
app.use('/api/stories', storyRoutes);

const connect = async () => {
  await mongoose.connect(process.env.MONGO_DB);
  try {
    console.log(`Connected to Database`)

    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}`)
    });
  }
  catch {
    console.error(`Error connecting to the database: ${err.message}`);
    throw new Error(`Error connecting to the database: ${err.message}`);
  }
}

connect();

// error handling
app.use = (err, req, res, next) => {
  res.status(500).send({ message: err.message });
};