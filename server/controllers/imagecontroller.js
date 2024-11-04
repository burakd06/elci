import { fetchAllImages, fetchImageById, saveImage } from '../services/image.service.js';

export const getImages = async (req, res) => {
    try {
        const images = await fetchAllImages();
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

export const uploadImage = async (req, res) => {
    const { imageUrl } = req.body; // Burada resim URL'sini alıyoruz
    try {
        const newImage = await saveImage(imageUrl);
        res.status(201).json(newImage);
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).json({ error: 'Resim yüklenirken bir hata oluştu.' });
    }
};
