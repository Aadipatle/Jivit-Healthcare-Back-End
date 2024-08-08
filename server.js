import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import customersRoute from './routes/allroutes.js'
dotenv.config()
const app = express();
const port = process.env.PORT || 4000;


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/',customersRoute)


app.listen(port,()=>{
    console.log(`port running on ${port}`);
})