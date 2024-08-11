import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from '../models/admin.model.js';  // Adjust the path as necessary
import connectDB from "./db.js";

dotenv.config();

async function createAdmin() {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    const adminExists = await Admin.findOne({ email: adminEmail });
    if (adminExists) {
        console.log('Admin user already exists');
        return;
    }

    const newAdmin = new Admin({
        email: adminEmail,
        password: adminPassword,
    });

    await newAdmin.save();
    console.log('Admin user created successfully');
}

connectDB();
createAdmin();
