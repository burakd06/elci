import multer from 'multer';
import path from 'path';
import { fetchAllImages, fetchImageById, saveImage } from '../services/image.service.js';

const upload = multer({
    dest: 'uploads/', 
});

export const getImages = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const images = await fetchAllImages(page);
        res.json(images);
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).json({ error: 'Resimler alınırken bir hata oluştu.' });
    }
};

export const getImageById = async (req, res) => {
    const { id } = req.params;
    try {
        const image = await fetchImageById(id);
        if (!image) {
            return res.status(404).json({ error: 'Resim bulunamadı.' });
        }
        res.json(image);
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).json({ error: 'Resim alınırken bir hata oluştu.' });
    }
};

export const uploadImage = upload.single('file'); // Tek dosya yüklemesi için multer kullanımı

export const saveImage = async (req, res) => {
    const { id } = req.params;
    const file = req.file; // Dosya objesi

    if (!file) {
        return res.status(400).json({ error: 'Dosya seçilmedi.' });
    }

    try {
        const imageUrl = path.join('/uploads', file.filename); // Yüklenen dosyanın URL'si
        const updatedImage = await saveImageModel(id, imageUrl); // Resmi güncelle

        res.status(200).json(updatedImage);
    } catch (error) {
        console.error('Resim yüklenirken hata oluştu:', error);
        res.status(500).json({ error: 'Resim yüklenirken bir hata oluştu.' });
    }
};
