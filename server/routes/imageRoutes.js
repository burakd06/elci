import express from 'express';
import { getImages, getImageById, uploadImage } from '../controllers/imagecontroller.js';

const router = express.Router();

// /api/images endpoint'ine GET ve POST istekleri
router.get('/images', getImages);
router.get('/images/:id', getImageById);
router.post('/images', uploadImage);

export default router;
