import { useState, useCallback, useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { usePopover } from 'src/hooks/use-popover';
import TextEditor from 'src/components/texteditor/texteditor';
import { getPageTexts } from 'src/api/comments/getComments';
import ImageEditor from 'src/components/imageeditor/imageeditor';
import { getImages } from 'src/api/comments/getComments';

export function EimzaView() {
  const [imagesList, setImagesList] = useState([]);
const [textDataList,setTextDataList] = useState([]);
const openSocial = usePopover();
const [animate, setAnimate] = useState(false);
const handleChangeFavorite = useCallback((event) => {  
  }, []);
const renderToolbar = (
    <Box gap={1.5} display="flex" sx={(theme) => ({ py: 3, my: 5 })} />
  );
  useState(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 300); 
  }, []);


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
      const response = await getPageTexts("e-imza")
      console.log("Alınan veri:", response.data);
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
      const imgresponse = await getImages("eimza");
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
            d.id === "eimzabaslik1" &&
            d.path === "/company/e-imza"
          )?.text} 
          textId={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "eimzabaslik1" &&
            d.path === "/company/e-imza"
          )?.id}
        />

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <ImageEditor
                  initialImage={{
                    id: "eimza1", 
                    path: "/company/e-eimza", 
                  }}
                  imagesList={imagesList} 
                  setImagesList={setImagesList}
                  css={{
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
                  d.id === "eimza1" &&
                  d.path === "/company/e-imza"
                )?.text} 
                textId={textDataList.find(d => 
                  d.element === "Typography" &&
                  d.id === "eimza1" &&
                  d.path === "/company/e-imza"
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
              d.id === "eimza2" &&
              d.path === "/company/e-imza"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "eimza2" &&
              d.path === "/company/e-imza"
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
                d.id === "eimzabaslik2" &&
                d.path === "/company/e-imza"
              )?.text} 
              textId={textDataList.find(d => 
                d.element === "Typography" &&
                d.id === "eimzabaslik2" &&
                d.path === "/company/e-imza"
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
                d.id === "eimza3" &&
                d.path === "/company/e-imza"
              )?.text} 
              textId={textDataList.find(d => 
                d.element === "Typography" &&
                d.id === "eimza3" &&
                d.path === "/company/e-imza"
              )?.id}
            />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="video"
            src="/assets/images/ürünler/eimza.mp4"
            autoPlay
            loop
            muted
            sx={{
              border: '2px solid black',
              borderRadius: '11px',
              width: '100%',
              transform: animate ? 'translateX(0)' : 'translateX(50px)',
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
            d.id === "eimza4" &&
            d.path === "/company/e-imza"
          )?.text} 
          textId={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "eimza4" &&
            d.path === "/company/e-imza"
          )?.id}
        />
    </Container>
      <Divider sx={{ my: 6 }} />
    </>
  );
}
