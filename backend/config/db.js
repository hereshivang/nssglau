import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path : './.env'});

// Connect Database to Atlas
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(console.log(`DB Connected Success`))
    } catch (error) {
        console.log(`Database Error : ${error}`)
    }
}

export default connectDB;