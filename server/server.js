import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDb from './config/db.js';

import todoRoute from './routes/todoRoute.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/todo', todoRoute)

app.get('/', (_, res) => {
  res.send("Welcome");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on http://localhost:${PORT}`);
});
