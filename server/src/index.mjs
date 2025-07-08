 import express, { response } from 'express';
 import { Client } from 'pg';

 const app = express();
 const port = process.env.Port || 3000;

 const client = new Client({
   host: 'localhost',
   port: 8000,
   user: "postgres",
   password: "a2y0",
   database: "db_intervention_management"
 })

 client.connect();

 app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
 })

 app.get('/getRoles',(request,response)=>{
   client.query('SELECT * FROM roles',(err,res)=>{
   if(err){
     console.error('Error executing query', err.stack);
   } else {
     console.log('Query result:', res.rows);
     response.status(200).json(res);
   }
   client.end;
 })
 })