import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const ImageEditor = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:3002/api/images/'); // API'den resimleri çek
                setImages(response.data); // API'den gelen verileri state'e kaydet
            } catch (error) {
                console.error('Resimler alınırken hata:', error);
            }
        };

        fetchImages(); // Resimleri çek
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {images.map((image) => (
                    <Box
                        key={image.id}
                        component="img"
                        alt={`Resim ${image.id}`}
                        src={`data:image/png;base64,${image.url}`} // Base64 kodlu resmi gösteriyoruz
                        sx={{
                            width: '150px', // Resim boyutu
                            borderRadius: '12px',
                            border: '2px solid #ddd',
                            margin: '10px',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageEditor;
