import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes/Roles.mjs';

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:5173/',
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'OCP Incident Management API is running!' });
});

//Routes
app.use('/test/roules',router)

// Database test route

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;