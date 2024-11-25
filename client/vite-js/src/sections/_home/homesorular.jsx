import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { RouterLink } from 'src/routes/components';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import TextEditor from 'src/components/texteditor/texteditor';
import { getPageTexts } from 'src/api/comments/getComments';
import ImageEditor from 'src/components/imageeditor/imageeditor';

export function HomeSorular({ sx, ...other }) {
  const [imagesList, setImagesList] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [circularProgress, setCircularProgress] = useState(0);
  const [textDataList, setTextDataList] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCircularProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [decodedToken, setDecodedToken] = useState(null);
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
        const response = await getPageTexts("");
        setTextDataList(response.data);
      } catch (error) {
        console.error('Veri alma hatası:', error);
      }
    };

    fetchTextData();
  }, []);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const imgresponse = await getImages("");
        console.log("Gelen resimler", imgresponse.data);
        setImagesList(imgresponse.data)
      } catch (error) {
        console.error('resim alma hatası:', error);
      }
    };
    fetchImageData();
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

  const AnimatedDiv = styled('div')(({ theme }) => ({
    textAlign: 'center',
  }));

  const renderSummary = (
    <AnimatedDiv
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        my: 3
      }}
    >
      <TextEditor
        variant="h2" css={{ my: 3 }}
        isAdmin={decodedToken?.isAdmin}
        initialText={textDataList.find(d =>
          d.element === "Typography" &&
          d.id === "homeQuestionsTitle" &&
          d.path === "/"
        )?.text}
        textId={textDataList.find(d =>
          d.element === "Typography" &&
          d.id === "homeQuestionsTitle" &&
          d.path === "/"
        )?.id}
      />

      <TextEditor
        css={{ color: 'text.secondary', mb: 5 }}
        isAdmin={decodedToken?.isAdmin}
        initialText={textDataList.find(d =>
          d.element === "Typography" &&
          d.id === "homeQuestionsDescription" &&
          d.path === "/"
        )?.text}
        textId={textDataList.find(d =>
          d.element === "Typography" &&
          d.id === "homeQuestionsDescription" &&
          d.path === "/"
        )?.id}
      />

      {decodedToken?.isAdmin ? (
        <TextEditor
          isAdmin={decodedToken?.isAdmin}
          initialText={textDataList.find(d =>
            d.element === "Button" &&
            d.id === "homeQuestionsButton" &&
            d.path === "/"
          )?.text}
          textId={textDataList.find(d =>
            d.element === "Button" &&
            d.id === "homeQuestionsButton" &&
            d.path === "/"
          )?.id}
        />
      ) : (
        <Button
          component={RouterLink}
          to="/company/blog"
          color="inherit"
          size="large"
          variant="outlined"
          endIcon={<Iconify width={16} icon="solar:alt-arrow-right-outline" />}
          id="homeQuestionsButton"
        >
          {textDataList.find(d =>
            d.element === "Button" &&
            d.id === "homeQuestionsButton" &&
            d.path === "/"
          )?.text}
        </Button>
      )}
    </AnimatedDiv>
  );

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 10 },
        ...sx,
        background: '#f0f0f0',
        width: '100%',  
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        
      }}
      {...other}
    >
      
      <Container component={MotionViewport}>
        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid xs={12} md={4} sx={{ pt: { md: 10 }, textAlign: { xs: 'center', md: 'left' } }}>
            {renderSummary}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
