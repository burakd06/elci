import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';
import { saveToSessionStorage, getFromSessionStorage, isCacheExpired, updateCacheTimestamp } from 'src/utils/localStorageHelper';

const ImageEditor = ({ initialImage, imagesList, setImagesList, css, isAdmin }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [fullImageUrl, setFullImageUrl] = useState(null);

  useEffect(() => {
      const localStorageKey = `${initialImage.id}_${initialImage.path}`;

      // LocalStorage cache kontrolü
      if (!isCacheExpired(localStorageKey)) {
          const cachedImage = getFromSessionStorage(localStorageKey);
          if (cachedImage) {
              setImage(cachedImage);
              setFullImageUrl(`https://api.elcitr.com${cachedImage}`);
          } else {
              setError('Resim bulunamadı');
          }
      } else if (imagesList.length > 0) {
          const selectedImage = imagesList.find(
              (img) => img.id === initialImage.id && img.path === initialImage.path
          );

          if (selectedImage) {
              setImage(selectedImage.url);
              setFullImageUrl(`https://api.elcitr.com${selectedImage.url}`);
              saveToSessionStorage(localStorageKey, selectedImage.url);
              updateCacheTimestamp(localStorageKey);
          } else {
              setError('Resim bulunamadı');
          }
      }
  }, [initialImage, imagesList]);

  const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (!selectedFile) return;

      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(selectedFile.type)) {
          return Swal.fire({
              title: 'Hata!',
              text: 'Sadece JPEG ve PNG türündeki dosyalar yüklenebilir.',
              icon: 'error',
              confirmButtonText: 'Tamam',
          });
      }

      const maxSize = 1 * 1024 * 1024; // 1 MB
      if (selectedFile.size > maxSize) {
          return Swal.fire({
              title: 'Hata!',
              text: 'Dosya boyutu 1 MBı geçemez.',
              icon: 'error',
              confirmButtonText: 'Tamam',
          });
      }

      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
          setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
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

    // Onay penceresini göster
    const result = await Swal.fire({
        title: 'Resmi güncellemek istediğinizden emin misiniz?',
        text: 'Bu işlem geri alınamaz.',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Hayır',  // "Hayır" butonunun metni
        confirmButtonText: 'Evet',  // "Evet" butonunun metni
        reverseButtons: false,  // Butonların sırasını standart olarak bırakır (Evet solda, Hayır sağda)
        focusCancel: true,  // "Hayır" butonunu varsayılan olarak seçili yapar
    });

    // Kullanıcı onay verirse işlemi gerçekleştir
    if (result.isConfirmed) {
        const formData = new FormData();
        formData.append("file", file);  // Seçilen dosyayı ekliyoruz
        formData.append("id", initialImage.id);  // Resmin ID'sini ekliyoruz

        try {
            const response = await axios.post('https://api.elcitr.com/api/uploadImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log('Başarıyla yüklendi:', response.data);

            // Resim güncellendikten sonra, yeni URL'yi alıp UI'yi güncelle
            const newUrl = `https://api.elcitr.com${response.data.filePath}`;
            setFullImageUrl(newUrl);
            setImage(newUrl);
            saveToSessionStorage(`${initialImage.id}_${initialImage.path}`, newUrl);

            // Başarılı işlem mesajı
            Swal.fire({
                title: 'Güncellendi!',
                text: 'Resminiz başarıyla güncellenmiştir.',
                icon: 'success',
                confirmButtonText: 'Tamam',
            });
        } catch (error) {
            console.error('Hata:', error.response ? error.response.data : error.message);
            Swal.fire({
                title: 'Hata!',
                text: 'Resim güncellenirken bir hata oluştu.',
                icon: 'error',
                confirmButtonText: 'Tamam',
            });
        }
    } else {
        // Kullanıcı "Hayır" seçerse
        Swal.fire({
            title: 'İptal Edildi',
            text: 'Resim güncelleme işlemi iptal edildi.',
            icon: 'info',
            confirmButtonText: 'Tamam',
        });
    }
};





  return (
      <div>
          {error && <Typography color="error">{error}</Typography>}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {fullImageUrl && (
                  <Box
                      key={fullImageUrl}
                      component="img"
                      src={fullImageUrl}  
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
