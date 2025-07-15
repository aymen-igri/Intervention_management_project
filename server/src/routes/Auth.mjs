import { Router } from 'express';
import { SignIn, SignUp } from '../controllers/AuthController.mjs';

const router = Router();
router.post('/signup', SignUp);
router.post('/signin',SignIn)

export default router;