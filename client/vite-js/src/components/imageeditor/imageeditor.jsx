import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';
import { saveToSessionStorage, getFromSessionStorage, isCacheExpired, updateCacheTimestamp } from 'src/utils/localStorageHelper'; // sessionStorage kullanımı

const ImageEditor = ({ initialImage, imagesList, setImagesList, css, isAdmin }) => {
  const [image, setImage] = useState(initialImage); 
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null); 
  const [imagePreview, setImagePreview] = useState(null); 
  const maxSize = 1 * 1024 * 1024; // 1MB
  
  useEffect(() => {
    const localStorageKey = `${initialImage.id}_${initialImage.path}`;
    if (!isCacheExpired(localStorageKey)) {
      const cachedImage = getFromSessionStorage(localStorageKey);
      if (cachedImage) {
        setImage(cachedImage);
      } else {
        setError('Resim bulunamadı');
      }
    } else if (imagesList.length > 0) {
      const selectedImage = imagesList.find(
        (img) => img.id === initialImage.id && img.path === initialImage.path
      );

      if (selectedImage) {
        setImage(selectedImage.url);
        saveToSessionStorage(localStorageKey, selectedImage.url);
        updateCacheTimestamp(localStorageKey);
      } else {
        setError('Resim bulunamadı');
      }
    }
  }, [initialImage, imagesList]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > maxSize) {
        console.warn('Image is too large to store in sessionStorage');
        return Swal.fire({
          title: 'Hata!',
          text: 'Dosya boyutu çok büyük!',
          icon: 'error',
          confirmButtonText: 'Tamam',
        });
      }
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFile(selectedFile);
      };
      reader.readAsDataURL(selectedFile);
    }
  
    // Her durumda bir değer döndürülmeli
    return null;
  };
  
  

  const handleUpdate = async () => {
    if (!file) {
        return Swal.fire({
            title: 'Hata!',
            text: 'Lütfen bir dosya seçin!',
            icon: 'error',
            confirmButtonText: 'Tamam',
        });
    }

    // Dosyayı base64 formatına dönüştür
    const reader = new FileReader();
    reader.onloadend = async () => {
        const base64Image = reader.result.split(',')[1]; // Base64 kodunu ayıklayın (başındaki veri türünü çıkar)

        try {
            // Base64 verisini gönder
            const response = await axios.post(
                `https://api.elcitr.com/api/images/upload`,
                {
                    id: initialImage.id, // Güncellenmek istenen resmin ID'si
                    base64Image: base64Image, // Base64 verisini gönder
                }
            );

            if (response.data && response.data.file) {
                setImage(response.data.file.url); // Resmi güncelle
                saveToSessionStorage(`${initialImage.id}_${initialImage.path}`, response.data.file.url);
                updateCacheTimestamp(`${initialImage.id}_${initialImage.path}`); // Cache zamanını güncelle

                Swal.fire({
                    title: 'Başarılı!',
                    text: 'Resim güncellendi!',
                    icon: 'success',
                    confirmButtonText: 'Tamam',
                });
            } else {
                Swal.fire({
                    title: 'Hata!',
                    text: 'Resim güncellenemedi.',
                    icon: 'error',
                    confirmButtonText: 'Tamam',
                });
            }
        } catch (error) {
            console.error('Hata:', error);
            Swal.fire({
                title: 'Hata!',
                text: 'Güncelleme sırasında bir hata oluştu.',
                icon: 'error',
                confirmButtonText: 'Tamam',
            });
        }
    };

    reader.readAsDataURL(file); // Dosyayı base64 formatına dönüştür
};











  

  return (
    <div>
      {error && <Typography color="error">{error}</Typography>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {image && (
          <Box
            key={image}
            component="img"
            src={`data:image/png;base64,${image}`}
            sx={{ ...css }}
          />
        )}
      </div>

      {isAdmin && (
        <div>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            style={{ marginBottom: '10px' }}
          />
        </div>
      )}

      {imagePreview && (
        <div>
          <Typography variant="h6">Seçilen Resim:</Typography>
          <Box component="img" src={imagePreview} sx={{ width: 200, height: 200, marginBottom: 2 }} />
        </div>
      )}

      {isAdmin && (
        <Button variant="contained" color="primary" onClick={handleUpdate} sx={{ mt: 2 }}>
          Güncelle
        </Button>
      )}
    </div>
  );
};

export default ImageEditor;
