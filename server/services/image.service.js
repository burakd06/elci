import { fetchAllImagesModel, fetchImageByIdModel, saveImageModel } from '../models/image.model.js';

export async function fetchAllImages() {
    try {
        return await fetchAllImagesModel();
    } catch (error) {
        console.error('Resimler alınırken hata:', error);
        throw new Error('Resimler alınırken hata oluştu.');
    }
}

export async function fetchImageById(id) {
    try {
        return await fetchImageByIdModel(id);
    } catch (error) {
        console.error('Resim alınırken hata:', error);
        throw new Error('Resim alınırken hata oluştu.');
    }
}

export async function saveImageService(imageData) {
    try {
        return await saveImageModel(imageData);
    } catch (error) {
        console.error('Resim kaydedilirken hata:', error);
        throw new Error('Resim kaydedilirken hata oluştu.');
    }
}
