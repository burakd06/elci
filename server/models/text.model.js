// models/text.model.js

import prisma from '../db.js';

export async function fetchAllTextsByPage(page) {
    try {
        const result = await prisma.texts.findMany({
            where: {
                path: { contains: page }
            }
        });
        return result;
    } catch (error) {
        console.error('Veri alma hatası:', error);
        throw new Error('Veri alınırken hata oluştu.');
    }
}

export async function getTextById(id) {
    try {
        const result = await prisma.texts.findUnique({
            where: {
                id: id // id'ye göre metni bul
            }
        });
        return result; // Sonuç null ise, hata fırlatmaya gerek yok
    } catch (error) {
        console.error('Veri alma hatası:', error);
        throw new Error('Veri alınırken hata oluştu.');
    }
}

export async function updateText(id, newText) {
    try {
        const updatedText = await prisma.texts.update({
            where: {
                id: id // id'ye göre güncelleme yap
            },
            data: {
                text: newText // Yeni metni ayarla
            }
        });
        return updatedText; // Güncellenmiş metni döndür
    } catch (error) {
        console.error('Güncelleme hatası:', error);
        throw new Error('Metin güncellenirken hata oluştu.');
    }
}

// texts tablosunu oluştur
const createTextsTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS texts (
            id TEXT PRIMARY KEY,
            element TEXT NOT NULL,
            path TEXT NOT NULL,
            text TEXT NOT NULL
        );
    `;

    try {
        await prisma.$executeRawUnsafe(createTableQuery);
        console.log('texts tablosu başarıyla oluşturuldu.');
    } catch (error) {
        console.error('Text tablosu oluşturulurken hata:', error);
    }
};

// Uygulama başladığında tabloyu oluştur
createTextsTable();
