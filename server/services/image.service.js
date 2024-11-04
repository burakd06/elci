import { fetchAllImagesModel, fetchImageByIdModel, saveImageModel } from '../models/image.model.js';

export async function fetchAllImages() {
    try {
        const images = await fetchAllImagesModel();
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

export async function saveImage(imageUrl) {
    try {
        const newImage = await saveImageModel(imageUrl);
        return newImage;
    } catch (error) {
        console.error('Resim kaydedilirken hata:', error);
        throw new Error('Resim kaydedilirken hata oluştu.');
    }
}
