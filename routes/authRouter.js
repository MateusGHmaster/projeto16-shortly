import { Router } from 'express';
import { userLogin } from '../controllers/authController.js';
import { loginSchema } from '../schemas/loginSchema.js';
import validateSchema from '../middlewares/validateSchema.js';

const authRouter = Router();

authRouter.post('/login', validateSchema(loginSchema), userLogin);

export default authRouter;
