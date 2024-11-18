import { fetchAllImagesModel, fetchImageByIdModel, saveImageModel } from 
'../models/image.model.js';

export async function fetchAllImages(page) {
    try {
        const images = await fetchAllImagesModel(page);
        return images;
    } catch (error) {
        console.error('Resimler alınırken hata:', error);
        throw new Error('Resimler alınırken hata oluştu.');
    }
}

export async function fetchImageById(id) {
    try {
        const image = await fetchImageByIdModel(id);
        return image;
    } catch (error) {
        console.error('Resim alınırken hata:', error);
        throw new Error('Resim alınırken hata oluştu.');
    }
}

export async function saveImageService(imageData) {
    try {
        console.log("Güncelleme öncesi id:", imageData.id);  // id'yi logla
        console.log("Güncelleme yapılacak url:", imageData.url);  // URL'yi logla

        // Veritabanı güncellemesi
        const updatedImage = await saveImageModel(imageData);  // Burada direkt olarak model fonksiyonunu çağırıyoruz

        console.log("Güncellenmiş Resim:", updatedImage); // Güncellenen resmi logla
        return updatedImage; // Güncellenen resmi döndür
    } catch (error) {
        console.error("Resim kaydedilirken hata oluştu:", error);  // Hata logu
        throw new Error('Resim kaydedilirken hata oluştu.');
    }
}





