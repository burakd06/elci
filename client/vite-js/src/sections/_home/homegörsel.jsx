import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { CONFIG } from 'src/config-global';
import { textGradient } from 'src/theme/styles';
import { varFade, MotionViewport } from 'src/components/animate';
import React, { useState, useEffect } from 'react';
import TextEditor from 'src/components/texteditor/texteditor';
import {getPageTexts,getImages} from 'src/api/comments/getComments'
import ImageEditor from 'src/components/imageeditor/imageeditor';


function AnimatedDiv({ children }) {
 
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

export function HomeGörsel({ sx, ...other }) {
 const [imagesList, setImagesList] = useState([]);
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
 
 const [textDataList, setTextDataList] = useState([]);
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
  
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Box
          gap={3}
          display="flex"
          alignItems="center"
          flexDirection="column"
          sx={{
            px: 3,
            pb: 10,
            borderRadius: 3,
            textAlign: 'center',
            bgcolor: 'background.neutral',
          }}
        >
          <AnimatedDiv>
          <ImageEditor
            isAdmin={decodedToken?.isAdmin}
                  initialImage={{
                    id: "homesolution", 
                    path: "/", 
                  }}
                  imagesList={imagesList} 
                  setImagesList={setImagesList}
                  css={{
                    width: 720, borderRadius: 8, marginTop: 10
                  }}
                />           
          </AnimatedDiv>
          <AnimatedDiv>
            <TextEditor
            css={{ color: 'text.disabled' }}
            variant="overline"
         isAdmin={decodedToken?.isAdmin} 
         initialText={textDataList.find(d => 
           d.element === "Typography" &&
           d.id === "homeImageOverline" &&
           d.path === "/"
         )?.text} 
         textId={textDataList.find(d => 
           d.element === "Typography" &&
           d.id === "homeImageOverline" &&
           d.path === "/"
         )?.id}
         />      
          </AnimatedDiv>

          <AnimatedDiv>
            <Typography variant="h2" id="homeImageTitle">
              <Box
                component="span"
                sx={(theme) => ({
                  ...textGradient(
                    `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                  ),
                })}
              >
                {` Elçi Yazılım `}
              </Box>
            </Typography>
          </AnimatedDiv>

          <AnimatedDiv>
            <TextEditor
            css={{ color: 'text.secondary', maxWidth: 480 }}
         isAdmin={decodedToken?.isAdmin} 
         initialText={textDataList.find(d => 
           d.element === "Typography" &&
           d.id === "homeImageDescription" &&
           d.path === "/"
         )?.text} 
         textId={textDataList.find(d => 
           d.element === "Typography" &&
           d.id === "homeImageDescription" &&
           d.path === "/"
         )?.id}
         /> 
          </AnimatedDiv>
        </Box>
      </Container>
    </Box>
  );
}
