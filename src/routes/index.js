import express from 'express';
import userRouter from './userRouter';

const router = express.Router();

router.userRouter('/user', userRouter);

export default router;
