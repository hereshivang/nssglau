import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import connectDB from "./config/db.js";
import {configCloudinary} from "./config/configCloudinary.js";
import blogRoutes from "./routes/blogRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
dotenv.config({ path: './.env' });

// Database & Cloudinary Connection
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
app.use("/api/blogs", blogRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/uploads", galleryRoutes);

// Server Listening
app.listen(process.env.PORT, () => {
    console.log(`Server Connected at ${process.env.PORT}`);
});