import { useState, useCallback,useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TextEditor from 'src/components/texteditor/texteditor';
import { getPageTexts,getImages } from 'src/api/comments/getComments';
import ImageEditor from 'src/components/imageeditor/imageeditor';


export function SerbestMakbuzView() {
const [imagesList, setImagesList] = useState([]);
const [animate, setAnimate] = useState(false);
const renderToolbar = (
    <Box gap={1.5} display="flex" sx={(theme) => ({ py: 3, my: 5 })} />
  );
useState(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 300); 
  }, []);

  const [textDataList, setTextDataList] = useState([]);
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
      const response = await getPageTexts("e-serbestmeslekmakbuzu")
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
      const imgresponse = await getImages("eserbestmeslek");
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
            d.id === "eserbestmeslekbaslik1" &&
            d.path === "/company/e-serbestmeslekmakbuzu"
          )?.text} 
          textId={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "eserbestmeslekbaslik1" &&
            d.path === "/company/e-serbestmeslekmakbuzu"
          )?.id}
        />


        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
          <ImageEditor
          isAdmin={decodedToken?.isAdmin}
                  initialImage={{
                    id: "eserbestmeslek1", 
                    path: "/company/eserbestmeslek", 
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
        elementType="typography"
        variant="body1"
        css={{ lineHeight: 1.8, textAlign: 'justify' }}
          isAdmin={decodedToken?.isAdmin} 
          initialText={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "eserbestmeslek1" &&
            d.path === "/company/e-serbestmeslekmakbuzu"
          )?.text} 
          textId={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "eserbestmeslek1" &&
            d.path === "/company/e-serbestmeslekmakbuzu"
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
              d.id === "eserbestmeslek2" &&
              d.path === "/company/e-serbestmeslekmakbuzu"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "eserbestmeslek2" &&
              d.path === "/company/e-serbestmeslekmakbuzu"
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
                d.id === "eserbestmeslekbaslik2" &&
                d.path === "/company/e-serbestmeslekmakbuzu"
              )?.text} 
              textId={textDataList.find(d => 
                d.element === "Typography" &&
                d.id === "eserbestmeslekbaslik2" &&
                d.path === "/company/e-serbestmeslekmakbuzu"
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
                d.id === "eserbestmeslek3" &&
                d.path === "/company/e-serbestmeslekmakbuzu"
              )?.text} 
              textId={textDataList.find(d => 
                d.element === "Typography" &&
                d.id === "eserbestmeslek3" &&
                d.path === "/company/e-serbestmeslekmakbuzu"
              )?.id}
            />
        </Grid>

        <Grid item xs={12} md={6}>
        <ImageEditor
        isAdmin={decodedToken?.isAdmin}
                  initialImage={{
                    id: "eserbestmeslek2", 
                    path: "/company/eserbestmeslek", 
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
            d.id === "eserbestmeslek4" &&
            d.path === "/company/e-serbestmeslekmakbuzu"
          )?.text} 
          textId={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "eserbestmeslek4" &&
            d.path === "/company/e-serbestmeslekmakbuzu"
          )?.id}
        />
    </Container>
  

      <Divider sx={{ my: 6 }} />
    </>
  );
}
