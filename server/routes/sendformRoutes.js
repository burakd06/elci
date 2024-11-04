// routes/loginRoutes.js

import express from 'express';
import { sendEmailController, testPost } from '../controllers/emailcontroller.js';

const router = express.Router();

// Test post route
router.post('/test', testPost);

// Email send route
router.post('/send', sendEmailController);

export default router;
