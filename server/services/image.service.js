import { fetchAllImagesModel, fetchImageByIdModel } from '../models/image.model.js';

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

