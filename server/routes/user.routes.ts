import express from 'express';
import { activateUser, registerUser } from '../controllers/user.contollers';
const userRouter = express.Router();

userRouter.post("/registration", registerUser);
userRouter.post("/activate-user", activateUser);
export default userRouter;