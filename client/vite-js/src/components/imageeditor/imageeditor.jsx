import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';

const ImageEditor = ({ initialImage, imagesList, setImagesList, css, isAdmin }) => {
  const [image, setImage] = useState(initialImage); 
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null); 
  const [imagePreview, setImagePreview] = useState(null); 

  useEffect(() => {
    if (imagesList.length > 0) {
      const selectedImage = imagesList.find(
        (img) => img.id === initialImage.id && img.path === initialImage.path
      );

      if (selectedImage) {
        setImage(selectedImage.url);
      } else {
        setError('Resim bulunamadı');
      }
    }
  }, [initialImage, imagesList]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); 
        setFile(selectedFile); 
      };
      reader.readAsDataURL(selectedFile);
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

    // Dosya boyutunu kontrol et
    if (file.size > 50 * 1024 * 1024) { // 50MB
        return Swal.fire({
            title: 'Hata!',
            text: 'Dosya boyutu çok büyük! Lütfen 50MB veya daha küçük bir dosya seçin.',
            icon: 'error',
            confirmButtonText: 'Tamam',
        });
    }

    const result = await Swal.fire({
        title: 'Resmi güncellemek istediğinize emin misiniz?',
        showCancelButton: true,
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır',
        focusCancel: true,
    });

    if (result.isConfirmed) {
        try {
            const formData = new FormData();
            formData.append('file', file); 

            const response = await axios.post(
                `https://api.elcitr.com/api/images/`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            console.log('Güncelleme yanıtı:', response.data);

            const updatedIndex = imagesList.findIndex((img) => img.id === initialImage.id);
            if (updatedIndex !== -1) {
                const updatedList = [...imagesList];
                updatedList[updatedIndex].url = imagePreview; 
                setImagesList(updatedList);
            }

            await Swal.fire({
                title: 'Başarılı!',
                text: 'Resim güncellendi!',
                icon: 'success',
                confirmButtonText: 'Tamam',
            });
        } catch (error) {
            console.error('Güncelleme hatası:', error);

            await Swal.fire({
                title: 'Hata!',
                text: 'Güncelleme sırasında bir hata oluştu.',
                icon: 'error',
                confirmButtonText: 'Tamam',
            });
        }
    } else {
        Swal.fire('Güncelleme iptal edildi.');
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
