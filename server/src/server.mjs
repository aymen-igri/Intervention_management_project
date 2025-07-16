// server.mjs
import dotenv from 'dotenv';
import app from './app.mjs';
import { connectDB } from './config/database.mjs';

dotenv.config();

connectDB();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}`);
});