import React, { useState, useEffect } from 'react';
import { Container, Typography, Avatar, Card, CardContent, TextField, Button, MenuItem, Grid, List, ListItem, ListItemText, Snackbar } from '@mui/material';
import { deepOrange, deepPurple, blue, green, red, pink } from '@mui/material/colors';
import axios from 'axios';
import { getPageTexts } from 'src/api/comments/getComments';
import TextEditor from 'src/components/texteditor/texteditor';

export function Blog() {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [product, setProduct] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [comments, setComments] = useState([]);
  const [usernameError, setUsernameError] = useState('');
  const [commentError, setCommentError] = useState('');
  const [textDataList, setTextDataList] = useState([]);
  const [decodedToken, setDecodedToken] = useState(null);
  const [notification, setNotification] = useState('');

  const products = [
    'e-Müstahsil Makbuzu', 'e-Arşiv Fatura', 'e-Fatura', 'e-İrsaliye', 
    'e-Serbest Meslek Makbuzu', 'e-Defter', 'e-Saklama', 'e-İmza', 'KEP'
  ];
  const colors = [deepOrange[500], deepPurple[500], blue[500], green[500], red[500], pink[500]];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const firstLetter = username ? username.charAt(0).toUpperCase() : '';

  // Text verilerini al
  useEffect(() => {
    const fetchTextData = async () => {
      try {
        const response = await getPageTexts("blog");
        setTextDataList(response.data);
      } catch (error) {
        console.error('Veri alma hatası:', error);
      }
    };
    fetchTextData();
  }, []);

  // Token decode ve admin kontrolü
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = parseJwt(token);
      setDecodedToken(decoded);
    }
  }, []);

  const parseJwt = (token) => {
    if (!token) return null;
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map((c) => {
      const hex = c.charCodeAt(0).toString(16).padStart(2, '0');
      return `%${hex}`;
    }).join(''));
    return JSON.parse(jsonPayload);
  };

 // Frontend tarafında, token ve admin bilgisini gönderiyoruz
useEffect(() => {
  if (selectedProduct) {
      const token = localStorage.getItem('token');
      const isAdmin = localStorage.getItem('isAdmin') === 'true';  // Admin bilgisini localStorage'dan alıyoruz

      // Admin bilgisiyle yorumları alıyoruz
      axios.get(`https://api.elcitr.com/comments/product/${selectedProduct}`, {
          headers: {
              Authorization: `Bearer ${token}`,  // Token'ı başlıkta gönderiyoruz
          },
          params: {
              isAdmin,  // Admin bilgisini parametre olarak gönderiyoruz
          },
      })
      .then(response => {
          setComments(response.data);  // Yorumları set ediyoruz
      })
      .catch(error => {
          console.error('Yorumları alamadım:', error);
      });
  }
}, [selectedProduct]);

  
  


  // Yorum gönder
  const handleCommentSubmit = () => {
    if (!username || !comment) {
      setUsernameError(username ? '' : 'Kullanıcı adı boş bırakılamaz.');
      setCommentError(comment ? '' : 'Yorum boş bırakılamaz.');
      return;
    }
    
    const newComment = { username, product, comment };
    axios.post('https://api.elcitr.com/comments/add', newComment)
      .then(response => {
        setComments(prevComments => [...prevComments, response.data]);
        setUsername('');
        setComment('');
        setProduct('');
      })
      .catch(error => console.error('Yorum ekleme hatası:', error));
  };

  // Yorum onaylama
  const handleApproveComment = async (commentId) => {
    try {
      const response = await axios.put(`https://api.elcitr.com/comments/approve/${commentId}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setNotification('Yorum başarıyla onaylandı!');
      setComments(prevComments => prevComments.map(comment =>
        comment.id === commentId ? { ...comment, approved: true } : comment
      ));
    } catch (error) {
      console.error('Yorum onaylama hatası:', error.response.data);
      setNotification('Yorum onaylama sırasında bir hata oluştu.');
    }
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent>
              <TextEditor 
                isAdmin={decodedToken?.isAdmin} 
                initialText={textDataList.find(d => 
                  d.element === "Typography" && d.id === "blogurunler" && d.path === "/company/blog"
                )?.text}
                textId="blogurunler"
              />
              <List>
                {products.map((product, index) => (
                  <ListItem button key={index} onClick={() => setSelectedProduct(product)}>
                    <ListItemText primary={product} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={9}>
          <Card>
            <CardContent>
              <TextEditor 
                isAdmin={decodedToken?.isAdmin} 
                initialText={textDataList.find(d => 
                  d.element === "Typography" && d.id === "blog3" && d.path === "/company/blog"
                )?.text}
                textId="blog3"
              />

              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Avatar sx={{ bgcolor: randomColor }}>{firstLetter}</Avatar>
                </Grid>
                <Grid item xs>
                  <TextField
                    label="Kullanıcı Adı"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={!!usernameError}
                    helperText={usernameError}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <TextField
                select
                label="Ürün Seçin"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                fullWidth
                margin="normal"
              >
                {products.map((product, index) => (
                  <MenuItem key={index} value={product}>{product}</MenuItem>
                ))}
              </TextField>

              <TextField
                label="Yorum Yap"
                multiline
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                fullWidth
                margin="normal"
                error={!!commentError}
                helperText={commentError}
              />

              <Button
                variant="contained"
                color="primary"
                onClick={handleCommentSubmit}
                style={{ marginTop: '10px' }}
              >
                Yorum Yap
              </Button>
            </CardContent>
          </Card>

          {selectedProduct && (
            <Card style={{ marginTop: '20px' }}>
              <CardContent>
                <Typography variant="h6">
                  {selectedProduct} İçin Yapılan Yorumlar
                </Typography>
                {comments.length > 0 ? (
                  comments.map((filteredComment, index) => (
                    <Card key={index} style={{ marginTop: '10px' }}>
                      <CardContent>
                        <Typography variant="body1">
                          <strong>{filteredComment.username}:</strong> {filteredComment.comment}
                        </Typography>
                        {decodedToken?.isAdmin && !filteredComment.approved && (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleApproveComment(filteredComment.id)}
                            style={{ marginTop: '10px' }}
                          >
                            Onayla
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Typography variant="body2">Henüz yorum yapılmamış.</Typography>
                )}
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>

      <Snackbar
        open={!!notification}
        autoHideDuration={6000}
        onClose={() => setNotification('')}
        message={notification}
      />
    </Container>
  );
}

export default Blog;
