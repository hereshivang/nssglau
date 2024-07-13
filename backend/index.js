import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import { __dirname } from './utils/directory.js';
import configCloudinary  from "./config/configCloudinary.js";

const app = express();
dotenv.config({path: './.env'}); 

// Database Connection
connectDB();
configCloudinary();
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// APIs
app.use("/api/blogs",blogRoutes);
app.use("/api/events",eventRoutes);




// Server Listening
app.listen(process.env.PORT, (req, res)=>{
    console.log(`Server Connected at ${process.env.port}`);
})