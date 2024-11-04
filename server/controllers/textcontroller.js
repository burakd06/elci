// controllers/textcontroller.js

import { fetchAllTextsByPage, fetchTextById, updateText } from '../services/text.service.js'; // fetchTextById'yi de içe aktar

export const getTexts = async (req, res) => {
    try {
        const page = req.query.page
        const texts = await fetchAllTextsByPage(page); // Service'den metinleri al
        res.json(texts); // Metinleri JSON formatında döndür
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).json({ error: 'Veriler alınırken bir hata oluştu.' }); // Hata mesajı döndür
    }
};

// Belirli bir id ile metni almak için
export const getTextById = async (req, res) => {
    const { id } = req.params; // URL'den id'yi al
    try {
        const text = await fetchTextById(id); // Service'den metni al
        if (!text) {
            return res.status(404).json({ error: 'Metin bulunamadı.' }); // Eğer metin yoksa 404 döndür
        }
        res.json(text); // Metni JSON formatında döndür
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).json({ error: 'Veri alınırken bir hata oluştu.' }); // Hata mesajı döndür
    }
};
export const updateTextById = async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    try {
        const updatedText = await updateText(id, text);
        if (!updatedText) {
            return res.status(404).json({ error: 'Metin bulunamadı.' });
        }
        res.json(updatedText);
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).json({ error: 'Güncelleme sırasında bir hata oluştu.' });
    }
};