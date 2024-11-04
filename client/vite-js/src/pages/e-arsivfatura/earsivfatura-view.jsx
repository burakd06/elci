import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TextEditor from 'src/components/texteditor/texteditor';
import { getPageTexts } from 'src/api/comments/getComments';




export function ArsivFaturaView() {
  const [textDataList, setTextDataList] = useState([]);
  const [animate, setAnimate] = useState(false);
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
        const response = await getPageTexts("e-arsivfatura")
        console.log("Alınan veri:", response.data);
        setTextDataList(response.data); 
      } catch (error) {
        console.error('Veri alma hatası:', error);
      }
    };

    fetchTextData(); 
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 300); 
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
    <>
      <Container component="section">
        <TextEditor 
        elementType="typography"
        variant="h2"
        css={{
          textAlign: "center",
          align: "center",
          fontWeight: 'bold',
          mb: 4,
          transform: animate ? 'translateY(0)' : 'translateY(-50px)',
          opacity: animate ? 1 : 0,
          transition: 'all 0.8s ease-in-out',
          marginTop: '45pt',
        }}
          isAdmin={decodedToken?.isAdmin} 
          initialText={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "earsivfaturabaslik1" &&
            d.path === "/company/e-arsivfatura"
          )?.text} 
          textId={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "earsivfaturabaslik1" &&
            d.path === "/company/e-arsivfatura"
          )?.id}
        />

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              alt="Ürün Görseli"
              src="/assets/images/ürünler/efaturaarsiv.jpg"
              sx={{
                width: '100%',
                borderRadius: '12px',
                border: '2px solid #ddd',
                transform: animate ? 'translateX(0)' : 'translateX(-100px)',
                opacity: animate ? 1 : 0,
                transition: 'all 0.8s ease-in-out',
                ':hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 6 }}>

              <TextEditor 
              variant="body1" css={{ lineHeight: 1.8, textAlign: 'justify' }}
              elementType="typography"
                isAdmin={decodedToken?.isAdmin} 
                initialText={textDataList.find(d => 
                  d.element === "Typography" &&
                  d.id === "earsivfatura1" &&
                  d.path === "/company/e-arsivfatura"
                )?.text} 
                textId={textDataList.find(d => 
                  d.element === "Typography" &&
                  d.id === "earsivfatura1" &&
                  d.path === "/company/e-arsivfatura"
                )?.id}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <TextEditor 
            variant="body1" css={{ lineHeight: 1.8, textAlign: 'justify' }}
            elementType="typography"
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "earsivfatura2" &&
              d.path === "/company/e-arsivfatura"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "earsivfatura2" &&
              d.path === "/company/e-arsivfatura"
            )?.id}
          />
        </Box>
      </Container>

      <Container component="section" sx={{ mt: 6 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextEditor 
            css={{
              fontWeight: 'bold',
              fontSize: '37pt',
              lineHeight: '1.2',
              mb: 2,
              textAlign: 'left',
              transform: animate ? 'translateX(0)' : 'translateX(-50px)',
              opacity: animate ? 1 : 0,
              transition: 'all 0.8s ease-in-out',
              marginBottom: '65px',
            }}
              elementType="typography"
              isAdmin={decodedToken?.isAdmin} 
              initialText={textDataList.find(d => 
                d.element === "Typography" &&
                d.id === "earsivfaturabaslik2" &&
                d.path === "/company/e-arsivfatura"
              )?.text} 
              textId={textDataList.find(d => 
                d.element === "Typography" &&
                d.id === "earsivfaturabaslik2" &&
                d.path === "/company/e-arsivfatura"
              )?.id}
            />
            <TextEditor 
            css={{
              fontSize: '15px',
              transform: animate ? 'translateX(0)' : 'translateX(-50px)',
              opacity: animate ? 1 : 0,
              transition: 'all 0.8s ease-in-out 0.3s',
            }}
              elementType="typography"
              isAdmin={decodedToken?.isAdmin} 
              initialText={textDataList.find(d => 
                d.element === "Typography" &&
                d.id === "earsivfatura3" &&
                d.path === "/company/e-arsivfatura"
              )?.text} 
              textId={textDataList.find(d => 
                d.element === "Typography" &&
                d.id === "earsivfatura3" &&
                d.path === "/company/e-arsivfatura"
              )?.id}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              alt="Ürün Görseli"
              src="/assets/images/ürünler/efaturaarsiv2.jpeg"
              sx={{
                width: '100%',
                borderRadius: '12px',
                border: '2px solid #ddd',
                transform: animate ? 'translateX(0)' : 'translateX(-100px)',
                opacity: animate ? 1 : 0,
                transition: 'all 0.8s ease-in-out',
                ':hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            />
          </Grid>
        </Grid>
        <TextEditor 
        elementType="typography"
        css={{
          fontSize: '15px',
          mt: 4,
          lineHeight: 1.8,
          transform: animate ? 'translateY(0)' : 'translateY(50px)',
          opacity: animate ? 1 : 0,
          transition: 'all 0.8s ease-in-out',
        }}
          isAdmin={decodedToken?.isAdmin} 
          initialText={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "earsivfatura4" &&
            d.path === "/company/e-arsivfatura"
          )?.text} 
          textId={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "earsivfatura4" &&
            d.path === "/company/e-arsivfatura"
          )?.id}
        />
      </Container>

      <Divider sx={{ my: 6 }} />
    </>
  );
}