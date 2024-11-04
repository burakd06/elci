import { useState, useEffect } from 'react';
import { Box, Container, Typography, TextField, Button, Divider, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Axios import edilmelidir

export function LoginView() {
  const [animate, setAnimate] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // useNavigate hook'u ile yönlendirme yapacağız

  // Animasyonu tetiklemek için useEffect
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 300); // 300ms sonra animasyon başlayacak
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Kullanıcı adı ve şifre gereklidir.");
      return;
    }

    setLoading(true); 

    try {
        const response = await axios.post('http://localhost:3002/auth/login', {
          username,
          password,
        });
  
     
        localStorage.setItem('token', response.data.token);
  
        setErrorMessage(''); 
        setLoading(false); 
        navigate('/profile'); 
    } catch (error) {
        setLoading(false); 
        setErrorMessage(error.response?.data?.message || 'Frontend hatası');
        console.error(error); 
    }
  };

  const handleProtectedRoute = async () => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      setErrorMessage("Giriş yapmanız gerekiyor.");
      return;
    }
  
    try {
      const response = await axios.get('http://localhost:3002/protected-route', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Korunan route:', response.data);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Erişim hatası');
      console.error(error);
    }
  };
  

  return (
    <Container component="section" maxWidth="xs">
      {/* Animasyonlu Başlık */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          transform: animate ? 'translateY(0)' : 'translateY(-50px)',
          opacity: animate ? 1 : 0,
          transition: 'all 0.8s ease-in-out',
        }}
      >
        Giriş Yap
      </Typography>

      {/* Hata Mesajı */}
      {errorMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Alert>
      )}

      {/* Giriş Formu */}
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
        onSubmit={handleSubmit} 
      >
        {/* Kullanıcı Adı */}
        <TextField
          label="Kullanıcı Adı"
          variant="outlined"
          fullWidth
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          sx={{
            transform: animate ? 'translateY(0)' : 'translateY(50px)',
            opacity: animate ? 1 : 0,
            transition: 'all 0.8s ease-in-out 0.3s',
          }}
        />

        {/* Şifre */}
        <TextField
          label="Şifre"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          sx={{
            transform: animate ? 'translateY(0)' : 'translateY(50px)',
            opacity: animate ? 1 : 0,
            transition: 'all 0.8s ease-in-out 0.3s',
          }}
        />

        {/* Giriş Butonu */}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          disabled={loading} // Yükleniyor durumunda butonu devre dışı bırak
          sx={{
            transform: animate ? 'translateY(0)' : 'translateY(50px)',
            opacity: animate ? 1 : 0,
            transition: 'all 0.8s ease-in-out 0.3s',
          }}
        >
          {loading ? 'Yükleniyor...' : 'Giriş Yap'} {/* Yükleniyor metni */}
        </Button>
      </Box>

      {/* Divider */}
      <Divider sx={{ my: 6 }} />
    </Container>
  );
}
