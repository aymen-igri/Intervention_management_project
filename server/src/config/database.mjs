import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  host: 'localhost',
  port: 8000,
  user: 'postgres',
  password: 'a2y0',
  database: 'db_intervention_management'
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log('📊 PostgreSQL Connected');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};

export { client, connectDB };