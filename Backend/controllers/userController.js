import { User } from "../modules/userModel.js";

export const sendMessage = async (req , res)=>{
    try {
        const {fullName , email , number , subject , message} = req.body;
        if(!fullName || !email || !number || !subject || !message){
            return res.status(400).json({
                success:false,
                message:"All fields are mandatory!"
            })
        }

        const user = await User.create({
            fullName,
            email,
            number,
            subject,
            message
        })
        return res.status(201).json({
            success:true,
            message:"Message Send Successfully!",
            user
        })
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Server Error",
            error:error.message
        })
    }
}