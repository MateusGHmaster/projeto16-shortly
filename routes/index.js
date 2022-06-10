import { Router } from 'express';
import userRouter from './userRouter.js';
import authRouter from './authRouter.js';
import urlRouter from './urlRouter.js';

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(urlRouter);

export default router;
