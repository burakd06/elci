import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { CONFIG } from 'src/config-global';
import { useEffect, useState } from 'react';
import { getPageTexts,getImages } from 'src/api/comments/getComments';
import ImageEditor from 'src/components/imageeditor/imageeditor';
import TextEditor from 'src/components/texteditor/texteditor';


export function AboutMission({ sx, ...other }) {
  const [imagesList, setImagesList] = useState([]);
  const [textDataList, setTextDataList] = useState([]);

  useEffect(() => {
    const fetchTextData = async () => {
      try {
        const response = await getPageTexts("about")
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
        overflow: 'hidden',
        py: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Stack
          spacing={3}
          alignItems={{ xs: 'center', md: 'unset' }}
          sx={{
            mb: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* <Typography variant="h2" id="aboutTitle2">
              {textDataList.find(d =>
                d.element === "Typography"
                && d.id === "aboutTitle2"
                && d.path === "/company/about"
                )?.text}
                </Typography> */}
                <TextEditor 
            variant="h2"
            elementType="typography"
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "aboutTitle2" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "aboutTitle2" &&
              d.path === "/company/about"
            )?.id}
          />
          <TextEditor 
          elementType="typography"
          css={{fontSize: '25px', color: 'grey'}}
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "aboutText2" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "aboutText2" &&
              d.path === "/company/about"
            )?.id}
          />
        </Stack>

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 3 }}
        >
          <Grid xs={12} md={6} lg={6} sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
          <ImageEditor
            isAdmin={decodedToken?.isAdmin}
                  initialImage={{
                    id: "aboutnedenbiz", 
                    path: "/company/about", 
                  }}
                  imagesList={imagesList} 
                  setImagesList={setImagesList}
                  css={{
                   width: '650px',
                   height: '850px',
                   borderRadius:'45px',
                   ':hover': {
                      transform: 'scale(1.05)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                    
                  }}
                /> 

          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Stack alignItems={{ md: 'flex-end' }} sx={{ position: 'relative' }}>
              <Card sx={{ p: 3, mt: 4 }}>
               
                <TextEditor 
              variant="h1"
              css={{opacity: 1, display: 'block', color: 'text.disabled'}}
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionIndex1" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionIndex1" &&
              d.path === "/company/about"
            )?.id}
          />
               
                <TextEditor 
            elementType="typography"
            variant="h5" css={{ mb: 2, mt: 3 }}
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionTitle1" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionTitle1" &&
              d.path === "/company/about"
            )?.id}
          />
               
                <TextEditor 
                css={{ color: 'text.secondary' }}
                elementType="typography"
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionText1" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionText1" &&
              d.path === "/company/about"
            )?.id}
          />
              </Card>

              <Card sx={{ p: 3, mt: 4 }}>
              
                <TextEditor 
                elementType="typography"
                 variant="h1"
                 css={{ opacity: 1, display: 'block', color: 'text.disabled' }}
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionIndex2" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionIndex2" &&
              d.path === "/company/about"
            )?.id}
          />

                <TextEditor 
                 elementType="typography"
                variant="h5" css={{ mb: 2, mt: 3 }}
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionTitle2" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionTitle2" &&
              d.path === "/company/about"
            )?.id}
          />
                
                <TextEditor 
                 elementType="typography"
                 css={{ color: 'text.secondary' }}
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionText2" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionText2" &&
              d.path === "/company/about"
            )?.id}
          />
              </Card>

              <Card sx={{ p: 3, mt: 4 }}>
                <TextEditor 
                variant="h1"
                elementType="typography"
                css={{ opacity: 1, display: 'block', color: 'text.disabled' }}
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionIndex3" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionIndex3" &&
              d.path === "/company/about"
            )?.id}
          />
      
                <TextEditor 
                variant="h5" css={{ mb: 2, mt: 3 }}
                elementType="typography"
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionTitle3" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionTitle3" &&
              d.path === "/company/about"
            )?.id}
          />
               
                <TextEditor 
                css={{ color: 'text.secondary' }}
                elementType="typography"
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionText3" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionText3" &&
              d.path === "/company/about"
            )?.id}
          />
              </Card>

              <Card sx={{ p: 3, mt: 4 }}>
                <TextEditor 
                variant="h1"
                css={{ opacity: 1, display: 'block', color: 'text.disabled' }}
                elementType="typography"
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionIndex4" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionIndex4" &&
              d.path === "/company/about"
            )?.id}
          />
                <TextEditor 
                variant="h5" css={{ mb: 2, mt: 3 }}
                elementType="typography"
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionTitle4" &&
              d.path === "/company/about"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionTitle4" &&
              d.path === "/company/about"
            )?.id}
          />
                <TextEditor 
                elementType="typography"
                css={{ color: 'text.secondary' }}
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionText4" &&
              d.path === "/company/about"
            )?.text}  
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "visionText4" &&
              d.path === "/company/about"
            )?.id}
          />
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
