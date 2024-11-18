import express from 'express';
import { getImages, getImageById, uploadImage } from '../controllers/imagecontroller.js';
import multer from 'multer';
import multerUpload from '../middleware/multer.js';

const router = express.Router();


router.get('/images', getImages);
router.get('/images/:id', getImageById);
router.post('/images/upload', (req, res, next) => {
    multerUpload.single('image')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ error: err.message });
        } else if (err) {
            return res.status(400).json({ error: err.message });
        }
        next();
    });
}, uploadImage);


export default router;
