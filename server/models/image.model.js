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

export async function saveImageModel(imageData) {
    try {
        // 'imageData' parametresi resmin verilerini içeriyor olmalı
        const newImage = await prisma.images.update({
            data: {
                // Resmin URL'ini veya base64 verisini burada geçin
                url: imageData.url,  // Örnek: imageData.base64 veya imageData.url
                // Diğer gerekli alanları da buraya ekleyebilirsiniz
            }
        });
        return newImage;
    } catch (error) {
        console.error("Resim kaydedilirken hata oluştu:", error);
        throw new Error('Resim kaydedilirken hata oluştu.');
    }
}

