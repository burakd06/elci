import { fetchAllImages, fetchImageById } from '../services/image.service.js';
import fs from 'fs';
import path from 'path';
import prisma from '../db.js';

export const getImages = async (req, res) => {
    try {
        const images = await fetchAllImages();
        res.status(200).json(images);
    } catch (error) {
        console.error('Resimler alınırken hata:', error);
        res.status(500).json({ error: 'Resimler alınırken hata oluştu.' });
    }
}

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
}

export const uploadImage = async (req, res) => {
    try {
        console.log("Gelen Body:", req.body);
        console.log("Gelen Dosya:", req.file);

        if (!req.body.id) {
            return res.status(400).json({ error: 'Gerekli parametre "id" gönderilmedi.' });
        }

        // Prisma ile işlem yapmadan önce id'nin formatını kontrol edin
        const id = req.body.id;

        // Prisma işlemi
        const image = await prisma.images.findUnique({
            where: { id },
        });

        if (!image) {
            return res.status(404).json({ error: 'Resim bulunamadı.' });
        }

        // Yeni URL'yi oluşturun
        const filePath = `/uploads/${req.imageFileName}`;
        
        // URL'yi güncelleyin (path sabit kalacak)
        const updatedImage = await prisma.images.update({
            where: { id },
            data: {
                url: filePath,  // Burada URL'yi güncelliyoruz
                // path: image.path,  // path'i sabit tutuyoruz
            },
        });

        // Başarılı yanıt
        return res.status(200).json({ filePath });
    } catch (error) {
        console.error("Hata oluştu:", error);
        return res.status(500).json({ error: 'Sunucuda bir hata oluştu.' });
    }
};


