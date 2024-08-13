import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
const PORT = process.env.PORT;

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// routes
app.get('/', (req, res) => {
  res.status(200).send("hello");
});

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