import express from 'express';
import { getImages, getImageById, uploadImage } from '../controllers/imagecontroller.js';


const router = express.Router();


router.get('/images', getImages);
router.get('/images/:id', getImageById);
router.post('/images/upload',uploadImage);

export default router;
