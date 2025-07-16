import { Router } from 'express';
import { GetUser, SignIn, SignUp } from '../controllers/AuthController.mjs';

const router = Router();
router.post('/signup', SignUp);
router.post('/signin',SignIn);
router.post('/getUser',GetUser)

export default router;