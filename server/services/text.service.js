// services/text.services.js

import { fetchAllTextsByPage as fetchAllTextsByPageModel, getTextById as modelGetTextById, updateText as modelUpdateText }
 from '../models/text.model.js';
 
export async function fetchAllTextsByPage(page) {
    try {
        const texts = await fetchAllTextsByPageModel(page); 
        return texts; 
    } catch (error) {
        console.error('Textler alınırken hata:', error);
        throw new Error('Textler alınırken hata oluştu.'); 
    }
}

// Belirli bir id ile metni almak için
export async function fetchTextById(id) {
    try {
        const text = await modelGetTextById(id); 
        return text; 
    } catch (error) {
        console.error('Text alınırken hata:', error); 
        throw new Error('Text alınırken hata oluştu.'); 
    }
}

export async function updateText(id, newText) {
    try {
        const updatedText = await modelUpdateText(id, newText); 
        return updatedText;
    } catch (error) {
        console.error('Text güncellenirken hata:', error); 
        throw new Error('Text güncellenirken hata oluştu.'); 
    }
}
