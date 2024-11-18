import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { _mock } from 'src/_mock';
import { useEffect, useState } from 'react';
import { getPageTexts,getImages } from 'src/api/comments/getComments';
import ImageEditor from 'src/components/imageeditor/imageeditor';
import TextEditor from 'src/components/texteditor/texteditor';
import { maxWidth } from '@mui/system';
const IMAGES = [...Array(4)].map((_, index) => _mock.image.travel(index));



export function AboutGiris({ sx, ...other }) {
  const [imagesList, setImagesList] = useState([]);
  const [textDataList, setTextDataList] = useState([]);
  useEffect(() => {
    const fetchTextData = async () => {
      try {
        const response = await getPageTexts("about")
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
        const imgresponse = await getImages("about");
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

  return (
    <Box
      component="section"
      sx={{
        pb: 5,
        pt: { xs: 3, md: 5 },
        ...sx,
      }}
      {...other}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 5, md: 10 },
        }}
      >
        <Box sx={{ textAlign: 'center' }}>

          <TextEditor 
          variant="h1"
          elementType="typography"
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "aboutTitle1" &&
              d.path === "/company/about"
            )?.text} 
            textDataList={textDataList}
            setTextDataList ={setTextDataList}
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "aboutTitle1" &&
              d.path === "/company/about"
            )?.id}
          />
          <TextEditor 
          elementType="typography"
          css={{mx: 'auto', maxWidth: 560, color: 'text.secondary'}}
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "aboutText1" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "aboutText1" &&
              d.path === "/company/about"
            )?.id}
          />
        </Box>

        <Grid container spacing={{ xs: 0, sm: 3 }}justifyContent="center"  // Tüm resimleri yatayda ortalar
  alignItems="center"  // Dikeyde ortalar
  sx={{ textAlign: 'center' }}>
        <Grid item xs={12} sm={6} md={3}>
          <ImageEditor
          isAdmin={decodedToken?.isAdmin}
                  initialImage={{
                    id: "about1", 
                    path: "/company/about", 
                  }}
                  imagesList={imagesList} 
                  setImagesList={setImagesList}
                  css={{width: 1,
                    height: '360pt',
                    width: '150pt',
                    borderRadius: 13,
                    objectFit: 'cover',
              ':hover': {
                      transform: 'scale(1.05)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                    
                  }}
                />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <ImageEditor
                isAdmin={decodedToken?.isAdmin}
                initialImage={{
                  id: "about2", 
                  path: "/company/about", 
                }}
                imagesList={imagesList} 
                setImagesList={setImagesList}
                css={{width: 1,
                  height: '360pt',
                  width: '150pt',
                  borderRadius: 13,
                  objectFit: 'cover',
            ':hover': {
                      transform: 'scale(1.05)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  
                }}
              />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
              <ImageEditor
              isAdmin={decodedToken?.isAdmin}
              initialImage={{
                id: "about3", 
                path: "/company/about", 
              }}
              imagesList={imagesList} 
              setImagesList={setImagesList}
              css={{width: 1,
                height: '360pt',
                width: '150pt',
                borderRadius: 13,
                objectFit: 'cover',
          ':hover': {
                      transform: 'scale(1.05)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                
              }}
            />
            </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <ImageEditor
        isAdmin={decodedToken?.isAdmin}
                  initialImage={{
                    id: "about4", 
                    path: "/company/about", 
                  }}
                  imagesList={imagesList} 
                  setImagesList={setImagesList}
                  css={{width: 1,
                    height: '360pt',
                    width: '150pt',
                    borderRadius: 13,
                    objectFit: 'cover',
              ':hover': {
                      transform: 'scale(1.05)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                    
                  }}
                />
                </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
