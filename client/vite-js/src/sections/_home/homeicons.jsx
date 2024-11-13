import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { useEffect,useState } from 'react';
import TextEditor from 'src/components/texteditor/texteditor';
import {getPageTexts} from 'src/api/comments/getComments'


const HIGHLIGHT_FEATURES = [
  { label: 'E-Fatura', icon: 'ion:receipt-outline', id: 'homeIcon-E-Fatura' },
  { label: 'E-Arşiv', icon: 'material-symbols:archive-outline', id: 'homeIcon-E-Arşiv' },
  { label: 'E-Serbest Meslek Makbuzu', icon: 'material-symbols:receipt', id: 'homeIcon-E-Serbest-Meslek-Makbuzu' },
  { label: 'E-Müstahsil Makbuzu', icon: 'material-symbols:receipt', id: 'homeIcon-E-Müstahsil-Makbuzu' },
  { label: 'E-Defter', icon: 'ph:notebook-light', id: 'homeIcon-E-Defter' },
  { label: 'E-Saklama', icon: 'material-symbols:lock-outline', id: 'homeIcon-E-Saklama' },
  { label: 'E-imza', icon: 'fluent:signature-16-regular', id: 'homeIcon-E-imza' },
];
  


function AnimatedDiv({ children }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}



export function Homeİcons({ sx, ...other }) {
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
      const response = await getPageTexts("")
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
    
    <Box
      component="section"
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
        ...sx,
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
          <Grid xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <AnimatedDiv>
              <TextEditor
            variant="h2" css={{ my: 3 }}
         isAdmin={decodedToken?.isAdmin} 
         initialText={textDataList.find(d => 
           d.element === "Typography" &&
           d.id === "homeIconsTitle" &&
           d.path === "/"
         )?.text} 
         textId={textDataList.find(d => 
           d.element === "Typography" &&
           d.id === "homeIconsTitle" &&
           d.path === "/"
         )?.id}
         />      
            </AnimatedDiv>
          </Grid>

          <Grid xs={12} md={7}>
            <Box
              rowGap={5}
              columnGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
              }}
            >
              {HIGHLIGHT_FEATURES.map((feature) => (
                <AnimatedDiv key={feature.id}>
                <Box
                  sx={{
                    gap: 2,
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    typography: 'subtitle2',
                    flexDirection: 'column',
                  }}
                  id={`homeIcon-${feature.label.replace(/\s+/g, '-')}`} // id oluşturma
                >
                  <Iconify icon={feature.icon} width={32} />
                  {textDataList.find(d =>
                    d.element === "Feature" &&
                    d.id === feature.id &&
                    d.path === "/"
                  )?.text || feature.label} 
                </Box>
                <TextEditor
            variant="h2" css={{ my: 3 }}
         isAdmin={decodedToken?.isAdmin} 
         initialText={textDataList.find(d => 
           d.element === "Feature" &&
           d.id === "feature.id" &&
           d.path === "/"
         )?.text} 
         textId={textDataList.find(d => 
           d.element === "Feature" &&
           d.id === "feature.id" &&
           d.path === "/"
         )?.id}
         />  
              </AnimatedDiv>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
