import mongoose from "mongoose";

export const connectDB = async (req , res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully!")
    } catch (error) {
        console.log("DB Error" , error)
    }
}