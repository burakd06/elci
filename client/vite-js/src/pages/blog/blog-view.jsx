import React, { useState, useEffect } from 'react';
import {Container,Typography,Avatar,Card,CardContent,TextField, Button, MenuItem,Grid,List,ListItem,ListItemText,Snackbar} from '@mui/material';
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
  const [isAdmin, setIsAdmin] = useState(false);
  const [notification, setNotification] = useState('');
  
  const products = [
    'E-Müstahsil Makbuzu',
    'E-Arşiv Fatura',
    'E-Fatura',
    'E-İrsaliye',
    'E-Serbest Meslek Makbuzu',
    'E-Defter',
    'E-Saklama',
    'E-İmza',
    'KEP',
  ];

  const colors = [
    deepOrange[500],
    deepPurple[500],
    blue[500],
    green[500],
    red[500],
    pink[500],
  ];
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const firstLetter = username ? username.charAt(0).toUpperCase() : '';

  // Text verilerini al
  useEffect(() => {
    const fetchTextData = async () => {
      try {
        const response = await getPageTexts("blog")
        console.log("Alınan veri:", response.data);
        setTextDataList(response.data); 
      } catch (error) {
        console.error('Veri alma hatası:', error);
      }
    };

    fetchTextData(); 
  }, []);

  // Admin kontrolü
  useEffect(() => {
    const checkAdminStatus = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:3002/auth/check-admin', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setIsAdmin(response.data.isAdmin);
        } catch (error) {
          console.error('Admin durumu kontrol hatası:', error);
        }
      }
    };

    checkAdminStatus();
  }, []);

  // Yorumları al
  useEffect(() => {
    if (selectedProduct) {
      axios.get(`http://localhost:3002/comments/product/${selectedProduct}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then(response => {
          setComments(response.data);
        })
        .catch(error => {
          console.error('Yorumları alamadım:', error);
        });
    }
  }, [selectedProduct]);

  // Yorum gönder
  const handleCommentSubmit = () => {
    let hasError = false;

    if (!username) {
      setUsernameError('Kullanıcı adı boş bırakılamaz.');
      hasError = true;
    } else {
      setUsernameError('');
    }
    if (!comment) {
      setCommentError('Yorum boş bırakılamaz.');
      hasError = true;
    } else {
      setCommentError('');
    }
    if (hasError) return;

    const newComment = { username, product, comment };
    axios.post('http://localhost:3002/comments/add', newComment)
      .then(response => {
        setComments(prevComments => [...prevComments, response.data]);
        setUsername('');
        setComment('');
        setProduct('');
      })
      .catch(error => {
        console.error('Yorum ekleme hatası:', error);
      });
  };

  // Ürün tıklama
  const handleProductClick = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
  };

  // Yorum onaylama
  const handleApproveComment = async (commentId) => {
    try {
      const response = await axios.put(`http://localhost:3002/comments/approve/${commentId}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      console.log('Yorum onaylandı:', response.data);
      setNotification('Yorum başarıyla onaylandı!'); // Bildirim mesajı
      setComments(prevComments =>
        prevComments.map(comment =>
          comment.id === commentId ? { ...comment, approved: true } : comment
        )
      );
    } catch (error) {
      console.error('Yorum onaylama hatası:', error.response.data);
      setNotification('Yorum onaylama sırasında bir hata oluştu.'); // Hata bildirimi
    }
  };
  const [decodedToken, setDecodedToken] = useState(null)
  useEffect(() => {
   const token = localStorage.getItem('token'); // Token'ı local storage'dan al
   if (token) {
     const decoded = parseJwt(token); // Token'ı decode et
     setDecodedToken(decoded);
     console.log("Decoded Token:", decoded);
   } else {
     console.log("Token bulunamadı");
   }
 }, []);
 
 useEffect(() => {
   const fetchTextData = async () => {
     try {
       const response = await getPageTexts("blog")
       console.log("Alınan veri:", response.data);
       setTextDataList(response.data); 
     } catch (error) {
       console.error('Veri alma hatası:', error);
     }
   };
 
   fetchTextData(); 
 }, []);
 
 const parseJwt = (token) => {
   if (!token) return null; 
   const base64Url = token.split('.')[1];
   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
   const jsonPayload = decodeURIComponent(
     window.atob(base64)
       .split('')
       .map((c) => {
         const hex = c.charCodeAt(0).toString(16).padStart(2, '0');
         return `%${hex}`;
       })
       .join('')
   );
 
   return JSON.parse(jsonPayload);
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
                d.element === "Typography" &&
                d.id === "blogurunler" &&
                d.path === "/company/blog"
              )?.text} 
              textId={textDataList.find(d => 
                d.element === "Typography" &&
                d.id === "blogurunler" &&
                d.path === "/company/blog"
              )?.id}
              />
               <List>
                {products.map((product, index) => (
                    <ListItem button key={index} onClick={() => handleProductClick(product)}>
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
                d.element === "Typography" &&
                d.id === "blog3" &&
                d.path === "/company/blog"
              )?.text} 
              textId={textDataList.find(d => 
                d.element === "Typography" &&
                d.id === "blog3" &&
                d.path === "/company/blog"
              )?.id}
              />

              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Avatar sx={{ bgcolor: randomColor }}>{firstLetter}</Avatar>
                </Grid>
                <Grid item xs>
                  <TextField
                    label={textDataList.find(d => d.element === "TextField" && d.id === "usernameInput")?.text || "Kullanıcı Adı"}
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={!!usernameError}
                    helperText={usernameError}
                    fullWidth
                  />
                  <TextEditor 
              variant="outlined"
              value={username}  
              isAdmin={decodedToken?.isAdmin}
              textId={textDataList.find(d => 
                d.element === "TextField" &&
                d.id === "blogUsernameInput" &&
                d.path === "/company/blog"
              )?.id}
              />
                </Grid>
              </Grid>

              <TextField
                select
                label={textDataList.find(d => d.element === "TextField" && d.id === "productSelect")?.text || "Ürün Seçin"}
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                fullWidth
                margin="normal"
              >
                 
                {products.map((product, index) => (
                  <MenuItem key={index} value={product}>
                    {product}
                  </MenuItem>
                  
                ))}
              </TextField>
              <TextEditor  
              isAdmin={decodedToken?.isAdmin}
              textId={textDataList.find(d => 
                d.element === "TextField" &&
                d.id === "blogProductSelect" &&
                d.path === "/company/blog"
              )?.id}
              />

              <TextField
                label={textDataList.find(d => d.element === "TextField" && d.id === "commentInput")?.text || "Yorum12 Yap"}
                multiline
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                fullWidth
                margin="normal"
                error={!!commentError}
                helperText={commentError}
              />
              <TextEditor  
              isAdmin={decodedToken?.isAdmin}
              textId={textDataList.find(d => 
                d.element === "TextField" &&
                d.id === "blogCommentInput" &&
                d.path === "/company/blog"
              )?.id}
              />

              <Button
                variant="contained"
                color="primary"
                onClick={handleCommentSubmit}
                style={{ marginTop: '10px' }}
              >
                {textDataList.find(d => d.element === "Button" && d.id === "submitButton")?.text || "Yorum Yap"}
              </Button>
              <TextEditor  
              isAdmin={decodedToken?.isAdmin}
              textId={textDataList.find(d => 
                d.element === "Button" &&
                d.id === "blogSubmitButton" &&
                d.path === "/company/blog"
              )?.id}
              />
            </CardContent>
          </Card>

          {selectedProduct && (
            <Card style={{ marginTop: '20px' }}>
              <CardContent>
                <Typography variant="h6">
                  {selectedProduct} {textDataList.find(d => d.element === "Typography" && d.id === "commentsHeader")?.text || "Ürünü İçin Yapılan Yorumlar"}
                </Typography>
                <TextEditor 
        elementType="typography"
          isAdmin={decodedToken?.isAdmin} 
          textId={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "blog4" &&
            d.path === "/company/blog"
          )?.id}
        />
                {comments.length > 0 ? (
                  comments.map((filteredComment, index) => (
                    <Card key={index} style={{ marginTop: '10px' }}>
                      <CardContent>
                        <Typography variant="body1">
                          <strong>{filteredComment.username}:</strong> {filteredComment.comment}
                        </Typography>
                        {/* Admin için onaylama butonu */}
                        {isAdmin && !filteredComment.approved && (
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
                  <TextEditor 
                variant="body2"
        elementType="typography"
          isAdmin={decodedToken?.isAdmin} 
          initialText={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "blog5" &&
            d.path === "/company/blog"
          )?.text} 
          textId={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "blog5" &&
            d.path === "/company/blog"
          )?.id}
        />                
                )}
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>

      {/* Snackbar for notifications */}
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
