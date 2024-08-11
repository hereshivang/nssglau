import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/admin.model.js';

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the email matches the admin email
        if (email !== process.env.ADMIN_EMAIL) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Find the admin user
        const admin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
        if (!admin) {
            return res.status(401).json({ message: 'Email Not Found ' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Password not match' });
        }

        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).cookie("token" , token).json({ msg : "Account Login Success" , token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


export const adminLogout = async(req,res) => {
    try {
        return res.status(201).cookie("token", "", {expiresIn:new Date(Date.now)}).json({
            message:`User Logged Out`,
            success : true
        })
    } catch (error) {
        console.log(`Logout Error : ${error}`);
    }
}