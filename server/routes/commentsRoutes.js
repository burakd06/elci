// routes/comments.js

import express from 'express';
import { authenticate } from '../middleware/authmiddleware.js'; // Middleware import edin
import { 
    getComments, 
    getCommentsByProduct, 
    createComment, 
    approveCommentById 
} from '../controllers/commentcontroller.js';

const router = express.Router();

// Yorumları alma
router.get('/', authenticate, getComments);

// Ürünle ilişkili yorumları alma
router.get('/product/:product', authenticate, getCommentsByProduct);

// Yorum ekleme
router.post('/add', createComment);

// Yorum onaylama
router.put('/approve/:id', authenticate, approveCommentById);

export default router;