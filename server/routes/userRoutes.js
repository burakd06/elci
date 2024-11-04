// routes/userRoutes.js

import express from 'express';
import { loginUser, createUser, getProfile } from '../controllers/usercontroller.js';
import { authenticate } from '../middleware/authmiddleware.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/create', createUser);
router.get('/profile', authenticate, getProfile);

export default router;
