import { fetchAllImagesModel, fetchImageByIdModel, saveImageModel } from '../models/image.model.js';

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

export async function saveImage(id, imageUrl) {
    try {
        const updatedImage = await saveImageModel(id, imageUrl);
        return updatedImage;
    } catch (error) {
        console.error('Resim kaydedilirken hata:', error);
        throw new Error('Resim kaydedilirken hata oluştu.');
    }
}
