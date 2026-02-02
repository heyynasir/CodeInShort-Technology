import express from 'express'
import { sendMessage } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/send' , sendMessage)

export default userRouter;