import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate(); // useNavigate kancasını kullanarak yönlendirme için

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('https://api.elcitr.com/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfileData(response.data);
      } catch (error) {
        console.error('Profil verisi alınırken bir hata oluştu:', error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Profil Bilgileri
      </Typography>
      <Typography variant="h6">
        Kullanıcı Adı: {profileData.username}
      </Typography>
      <Typography variant="h6">
        Yönetici Mi: {profileData.isAdmin ? 'Evet' : 'Hayır'}
      </Typography>
      {/* Diğer profil bilgileri burada görüntülenebilir */}
      <Box mt={4}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate('/')} // Anasayfaya gitmek için yönlendirme
        >
          Anasayfaya Git
        </Button>
      </Box>
    </Container>
  );
}
