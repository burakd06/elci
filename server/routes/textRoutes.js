// routes/textRoutes.js

import express from 'express'; // Express'i içe aktar
import { getTexts, getTextById,updateTextById  } from '../controllers/textcontroller.js'; // Controller'ları içe aktar

const router = express.Router();

// /api/texts endpoint'ine GET isteği
router.get('/texts', getTexts);
router.get('/texts/:id', getTextById); 
router.put('/texts/:id', updateTextById);

export default router; 
