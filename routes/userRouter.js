import { createUser, getUser } from '../controllers/userController.js';
import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema.js';
import { validateToken } from '../middlewares/validateToken.js';
import signUpSchema from '../schemas/signUprSchema.js';

const userRouter = Router();

userRouter.post('/users', validateSchema(signUpSchema), createUser);
userRouter.get('/users', validateToken, getUser);

export default userRouter;