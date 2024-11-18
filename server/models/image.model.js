import prisma from '../db.js';

export async function fetchAllImagesModel(page) {
    try {
        const images = await prisma.images.findMany({
            where: {
                path: { contains: page }
            }
        });
        return images;
    } catch (error) {
        console.error('Veri alma hatası:', error);
        throw new Error('Veri alınırken hata oluştu.');
    }
}

export async function fetchImageByIdModel(id) {
    try {
        const image = await prisma.images.findUnique({
            where: {
                id: id,
            },
        });
        return image;
    } catch (error) {
        console.error('Veri alma hatası:', error);
        throw new Error('Veri alınırken hata oluştu.');
    }
}

import prisma from '../db.js';

export async function saveImageModel(imageData) {
    try {
        const updatedImage = await prisma.images.update({
            where: {
                id: imageData.id,
            },
            data: {
                url: imageData.url, // Base64 kodunu kaydediyoruz
            },
        });
        return updatedImage;
    } catch (error) {
        console.error("Resim kaydedilirken hata oluştu:", error);
        throw new Error('Resim kaydedilirken hata oluştu.');
    }
}



