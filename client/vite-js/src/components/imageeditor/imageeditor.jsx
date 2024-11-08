import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const ImageEditor = ({ imgIds }) => {  // imgIds birden fazla ID alacak
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                // Tüm resimleri almak için genel endpoint'e istek atıyoruz
                const response = await axios.get('https://api.elcitr.com/api/images/');
                const allImages = response.data; // Tüm resimler

                // imgIds içindeki her ID'yi filtreleyerek resimleri alıyoruz
                const filteredImages = allImages.filter(img => imgIds.includes(img.id)); 

                if (filteredImages.length > 0) {
                    setImages(filteredImages); // Bulunan resimleri state'e kaydediyoruz
                } else {
                    setError('Hiçbir resim bulunamadı.');
                }

            } catch (error) {
                console.error('Resimler alınırken hata:', error.response || error.message);
                setError('Resimler alınırken hata oluştu.');
            }
        };

        fetchImages(); // Resimleri çek
    }, [imgIds]); // imgIds değiştiğinde tekrar çalışacak

    return (
        <div>
            {error && <Typography color="error">{error}</Typography>} {/* Hata mesajı göster */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {images.map((image) => (
                    <Box
                        key={image.url}
                        component="img"
                        alt={`Resim ${image.url}`}
                        src={`data:image/png;base64,${image.url}`} // Base64 kodlu resmi gösteriyoruz
                        sx={{
                            width: '100%',
                            borderRadius: '12px',
                            border: '2px solid #ddd',
                            margin: '10px',
                            mb: 4,
                            transition: 'all 0.8s ease-in-out',
                            opacity: animate ? 0 : 1,
                            transform: animate ? 'translateX(0)' : 'translateX(-100px)',
                            ':hover': {
                                transform: 'scale(1.05)',
                                transition: 'transform 0.3s ease-in-out',
                            },
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageEditor;
