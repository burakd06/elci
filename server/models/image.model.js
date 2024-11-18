import prisma from '../db.js';

export async function fetchAllImagesModel() {
    try {
        const images = await prisma.images.findMany();
        return images;
    } catch (error) {
        console.error('Veri alma hatası:', error);
        throw new Error('Veri alınırken hata oluştu.');
    }
}

export async function fetchImageByIdModel(id) {
    try {
        const image = await prisma.images.findUnique({
            where: { id },
        });
        return image;
    } catch (error) {
        console.error('Veri alma hatası:', error);
        throw new Error('Veri alınırken hata oluştu.');
    }
}

export async function saveImageModel(imageData) {
    try {
        const savedImage = await prisma.images.upsert({
            where: { id: imageData.id },
            update: { url: imageData.url, path: imageData.path || null },
            create: { id: imageData.id, url: imageData.url, path: imageData.path || null },
        });
        return savedImage;
    } catch (error) {
        console.error('Veritabanına kayıt hatası:', error);
        throw new Error('Veritabanına kayıt sırasında hata oluştu.');
    }
}
