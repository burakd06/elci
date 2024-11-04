import prisma from '../db.js';

export async function fetchAllImagesModel() {
    try {
        const images = await prisma.images.findMany(); // images tablosundan tüm resimleri al
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
        return image; // null dönerse hata fırlatmaya gerek yok
    } catch (error) {
        console.error('Veri alma hatası:', error);
        throw new Error('Veri alınırken hata oluştu.');
    }
}

export async function saveImageModel(imageUrl) {
    try {
        const newImage = await prisma.images.create({
            data: {
                url: imageUrl, // Resim URL'sini kaydet
            },
        });
        return newImage; // Yeni resmi döndür
    } catch (error) {
        console.error('Resim kaydetme hatası:', error);
        throw new Error('Resim kaydedilirken hata oluştu.');
    }
}

// images tablosunu oluştur
const createImagesTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS images (
            id TEXT PRIMARY KEY,
            url TEXT NOT NULL
        );
    `;

    try {
        await prisma.$executeRawUnsafe(createTableQuery);
        console.log('images tablosu başarıyla oluşturuldu.');
    } catch (error) {
        console.error('Images tablosu oluşturulurken hata:', error);
    }
};

// Uygulama başladığında tabloyu oluştur
createImagesTable();
