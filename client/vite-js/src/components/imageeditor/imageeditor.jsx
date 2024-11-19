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

const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    // FormData oluşturuluyor
    const formData = new FormData();
    formData.append('image', selectedFile); // Buradaki 'image' formda kullanacağınız alan adı olmalı

    try {
        // Dosya yükleme isteği
        const response = await axios.post('https://api.elcitr.com/api/uploadImage', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Axios bunu otomatik ayarlamalı, ancak ihtimale karşı buraya da ekleyebilirsiniz
            },
        });
        console.log('Dosya yüklendi:', response.data);
    } catch (error) {
        console.error('Dosya yükleme hatası:', error);
        Swal.fire({
            title: 'Hata!',
            text: `Dosya yükleme hatası: ${error.response ? error.response.data : error.message}`,
            icon: 'error',
            confirmButtonText: 'Tamam',
        });
    }
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

    // Base64 verisini form-data'ya ekle
    const formData = new FormData();
    formData.append('id', initialImage.id);
    formData.append('base64Image', imagePreview); // Base64 verisi

    try {
      const formData = new FormData();
formData.append('image', file); // 'image' burada server tarafındaki alan adı ile uyumlu olmalı

try {
    const response = await axios.post('https://api.elcitr.com/api/images/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data', // Doğru başlık
        },
    });
    // İşlem başarılı
} catch (error) {
    console.error('Hata:', error);
}

      

        Swal.fire({
            title: 'Başarılı!',
            text: 'Resim güncellendi!',
            icon: 'success',
            confirmButtonText: 'Tamam',
        });
    } catch (error) {
        console.error('Hata:', error);
        Swal.fire({
            title: 'Hata!',
            text: 'Resim yüklenirken bir hata oluştu.',
            icon: 'error',
            confirmButtonText: 'Tamam',
        });
    }
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
