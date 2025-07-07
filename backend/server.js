import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db.js';
import Task from './models/Task.js';
import taskRoutes from './routes/tasks.js';

dotenv.config();
const server = express();

server.use(cors());
server.use(express.json());
server.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await db.authenticate();
    await Task.sync();
    server.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Database failed:', err);
  }
};

start();
