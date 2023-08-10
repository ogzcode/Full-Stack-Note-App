import express from 'express';

import { SignIn, Login } from '../controllers/AuthController.js';

const router = express.Router();

router.post('/signin', SignIn);
router.post('/login', Login);

export default router;