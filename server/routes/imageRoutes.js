import express from 'express';
import { getImages, getImageById, uploadImage } from '../controllers/imagecontroller.js';
import multer from 'multer';
import upload from '../helper/multer.js';


const router = express.Router();


router.get('/images', getImages);
router.get('/images/:id', getImageById);
router.post('/uploadImage', upload.single('file'), uploadImage);



export default router;
