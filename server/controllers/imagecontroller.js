import { fetchAllImages, fetchImageById, saveImageService } from '../services/image.service.js';

export const getImages = async (req, res) => {
    try {
        const images = await fetchAllImages();
        res.status(200).json(images);
    } catch (error) {
        console.error('Resimler alınırken hata:', error);
        res.status(500).json({ error: 'Resimler alınırken hata oluştu.' });
    }
};

export const getImageById = async (req, res) => {
    try {
        const { id } = req.params;
        const image = await fetchImageById(id);

        if (!image) {
            return res.status(404).json({ error: 'Resim bulunamadı.' });
        }
        res.status(200).json(image);
    } catch (error) {
        console.error('Resim alınırken hata:', error);
        res.status(500).json({ error: 'Resim alınırken hata oluştu.' });
    }
};

export const uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Dosya yüklenemedi!' });
    }

    res.status(200).json({
        message: 'Dosya başarıyla yüklendi.',
        filePath: `/uploads/${req.file.filename}`,
    });
};
