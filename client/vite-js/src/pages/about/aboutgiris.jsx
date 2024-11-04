import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { _mock } from 'src/_mock';
import { useEffect, useState } from 'react';
import {getPageTexts} from 'src/api/comments/getComments'
import TextEditor from 'src/components/texteditor/texteditor';
const IMAGES = [...Array(4)].map((_, index) => _mock.image.travel(index));



export function AboutGiris({ sx, ...other }) {
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

        <Grid container disableEqualOverflow spacing={{ xs: 0, sm: 3 }}>
          {IMAGES.map((item, index) => (
            <Grid key={item} xs={12} sm={6} md={index === 3 ? 6 : 2}>
              <Box
                component="img"
                alt={item}
                src={item}
                sx={{
                  width: 1,
                  height: '360pt',
                  borderRadius: 13,
                  objectFit: 'cover',
                  ...(index !== 0 && {
                    display: { xs: 'none', sm: 'block' },
                  }),
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
