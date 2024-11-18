// models/text.model.js

import prisma from '../db.js';

export async function fetchAllTextsByPage(page) {
    try {
        const result = await prisma.texts.findMany({
            where: {
                path: {
                    contains: page, // Burada 'page' parametresinin doğru formatta olduğundan emin olun
                },
            },
        });
        return result;
    } catch (error) {
        console.error('Veri alma hatası:', error); // Daha fazla bilgi için hata çıktısını inceleyin
        throw new Error('Veri alınırken hata oluştu.');
    }
}



export async function getTextById(id) {
    try {
        const result = await prisma.texts.findUnique({
            where: {
                id: id,
            },
        });
        if (!result) {
            throw new Error('Metin bulunamadı.');
        }
        return result;
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

