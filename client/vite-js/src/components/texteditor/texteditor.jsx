import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, ListItem, InputAdornment } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

/**
 * 
 * @param {("typography,listItem,TextField,subtitle2,body2,Field.Text")} params.elementType
 * @returns 
 */
const TextEditor = ({ isAdmin, initialText, textId, elementType, variant, css, textDataList = [], setTextDataList, blogProducts }) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    setText(initialText); // initialText değiştiğinde durumu güncelle
  }, [initialText]);

  const handleUpdate = async () => {
    const result = await Swal.fire({
      title: 'Metni güncellemek istediğinize emin misiniz?',
      showCancelButton: true,
      confirmButtonText: 'Evet',
      cancelButtonText: 'Hayır',
      focusCancel: true, // "Hayır" butonunu varsayılan olarak seçili tut
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.put(`http://localhost:3002/api/texts/${textId}`, {
          text,
        });

        console.log('Güncelleme yanıtı:', response.data); // Log the response

        const needToUpdateIndex = textDataList.findIndex(item => item.id === textId);

        if (needToUpdateIndex !== -1) {
          const tempList = [...textDataList];
          tempList[needToUpdateIndex].text = text;
          setTextDataList(tempList);
        }

        // SweetAlert ile onay mesajı göster
        await Swal.fire({
          title: 'Başarılı!',
          text: 'Metin güncellendi!',
          icon: 'success',
          confirmButtonText: 'Tamam'
        });
      } catch (error) {
        console.error('Güncelleme hatası:', error);
        
        if (error.response) {
          // Server responded with an error
          console.error('Yanıt durumu:', error.response.status);
          console.error('Yanıt verisi:', error.response.data);
        } else if (error.request) {
          // No response was received
          console.error('İstek yapıldı ancak yanıt alınamadı:', error.request);
        } else {
          // Some error occurred in setting up the request
          console.error('Hata:', error.message);
        }

        // Hata durumunda SweetAlert ile hata mesajı göster
        await Swal.fire({
          title: 'Hata!',
          text: 'Güncelleme sırasında bir hata oluştu.',
          icon: 'error',
          confirmButtonText: 'Tamam'
        });
      }
    } else {
      Swal.fire('Güncelleme iptal edildi.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Varsayılan Enter davranışını engelle
      // Enter tuşuna basıldığında otomatik olarak "Hayır" seçeneğini işleme
      Swal.fire({
        title: 'Metni güncellemek istediğinize emin misiniz?',
        showCancelButton: true,
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır',
        focusCancel: true, // "Hayır" butonunu varsayılan olarak seçili tut
      }).then((result) => {
        if (result.isConfirmed) {
          handleUpdate(); // Güncelleme fonksiyonu çağrılır
        } else {
          // "Hayır" butonuna basılmış gibi işlem yapılır
          Swal.fire('Güncelleme iptal edildi.');
        }
      });
    }
  };

  if (!isAdmin && elementType === "listItem") {
    return (
      <div>
        <ListItem sx={{ ...css }}>{initialText}</ListItem>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div>
        <Typography sx={{ ...css }} variant={variant}>{initialText}</Typography>
      </div>
    );
  }

  if (isAdmin && elementType === "select") {
    return (
      <div>
        <TextField
          label="Üstteki Yazıyı Düzenle"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress} // Enter tuşu için olay
          fullWidth
          multiline
        />
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Güncelle
        </Button>
        {blogProducts.map((product, index) => (
          <div key={index}>
            <TextField
              label="Üstteki Yazıyı Düzenle"
              variant="outlined"
              sx={{mt:2}}
              size='small'
              defaultValue={product}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={handleKeyPress} // Enter tuşu için olay
              fullWidth
              multiline
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="contained" color="primary" onClick={handleUpdate}>
                      Güncelle
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <TextField
        label="Üstteki Yazıyı Düzenle"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress} // Enter tuşu için olay
        fullWidth
        multiline
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" color="primary" onClick={handleUpdate}>
                Güncelle
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default TextEditor;
