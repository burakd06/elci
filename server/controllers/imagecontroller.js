import { fetchAllImages, fetchImageById, saveImageService } from '../services/image.service.js';


export const getImages = async (req, res) => {
    try {
        const page = req.query.page;
        const images = await fetchAllImages(page);
        res.json(images); // localStorage kullanmadan veriyi direkt olarak JSON olarak döndürüyoruz
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).json({ error: 'Resimler alınırken bir hata oluştu.' });
    }
};


export const getImageById = async (req, res) => {
    const { id } = req.params;
    try {
        const image = await fetchImageById(id);
        if (!image) {
            return res.status(404).json({ error: 'Resim bulunamadı.' });
        }
        res.json(image);
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).json({ error: 'Resim alınırken bir hata oluştu.' });
    }
};

export const uploadImage = async (req, res) => {
    if (!req.body.id || !req.body.base64Image) {
        return res.status(400).json({ error: 'Eksik parametreler: ID ve base64Image gereklidir.' });
    }

    try {
        // Veritabanı güncellemesi vs.
    } catch (error) {
        console.error('Sunucu hatası:', error);
        res.status(500).json({ error: 'Bir hata oluştu' });
    }

    if (!req.files || !req.files.file) {
        console.error('Dosya eksik.');
        return res.status(400).json({ error: 'Dosya eksik.' });
    }

    const uploadedFile = req.files.file;
    const base64Image = uploadedFile.data.toString('base64'); // Base64 formatına dönüştürülüyor

    try {
        const updatedImage = await saveImageModel({
            id: req.body.id,
            url: base64Image, // Base64 verisini veritabanına kaydediyoruz
        });

        if (updatedImage) {
            console.log('Güncellenen Resim:', updatedImage);
            res.status(200).json({
                message: 'Resim başarıyla güncellendi.',
                file: updatedImage, // Güncellenmiş resmi döndürüyoruz
            });
        } else {
            console.error('Veritabanı güncellemesi başarısız oldu.');
            res.status(500).json({ error: 'Resim güncellenirken bir hata oluştu.' });
        }
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).json({ error: 'Resim yüklenirken bir hata oluştu.' });
    }
};






