import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes/noteRoutes.js';
const app = express();

app.use(express.json());

app.use("/api/notes",router);

app.listen(process.env.PORT,()=>{
    console.log("server is running on port ",process.env.PORT);
})