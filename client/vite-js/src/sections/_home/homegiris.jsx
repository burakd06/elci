import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient, textGradient } from 'src/theme/styles';
import { varFade, MotionViewport } from 'src/components/animate';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TextEditor from 'src/components/texteditor/texteditor';
import {getPageTexts} from 'src/api/comments/getComments'

function AnimatedDiv({ children }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

export function HomeGiris({ sx, ...other }) {
  
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
      const response = await getPageTexts("/")
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

  const theme = useTheme();

  const renderContent = (
    <Stack
      component={MotionViewport}
      spacing={5}
      alignItems={{ xs: 'center', md: 'flex-start' }}
      sx={{
        maxWidth: 480,
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <AnimatedDiv>
        <Typography variant="h1" id="homeTitle1">
            <TextEditor
            variant="h1"
         isAdmin={decodedToken?.isAdmin} 
         initialText={textDataList.find(d => 
           d.element === "Typography" &&
           d.id === "homeTitle1" &&
           d.path === "/"
         )?.text} 
         textId={textDataList.find(d => 
           d.element === "Typography" &&
           d.id === "homeTitle1" &&
           d.path === "/"
         )?.id}
         />      
          <Box
            component="span"
            sx={{
              ...textGradient(
                `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
              ),
            }}
            id="homeText1"
          >
            {` Elçi Yazılım`}
          </Box>
        </Typography>
        
      </AnimatedDiv>

      <AnimatedDiv>
        <TextEditor
         css={{ maxWidth: 480 }}
         isAdmin={decodedToken?.isAdmin} 
         initialText={textDataList.find(d => 
           d.element === "Typography" &&
           d.id === "homeSubtitle1" &&
           d.path === "/"
         )?.text} 
         textId={textDataList.find(d => 
           d.element === "Typography" &&
           d.id === "homeSubtitle1" &&
           d.path === "/"
         )?.id}
         />      
        {/* <Typography sx={{ maxWidth: 480 }} >
        </Typography> */}
      </AnimatedDiv>
    </Stack>
  );

  const renderImage = (
    <Box
      component={MotionViewport}
      sx={{
        flex: '1 1 auto',
        position: 'relative',
        display: { xs: 'none', md: 'block' },
      }}
    >
      {[...Array(7)].map((_, index) => (
        <Box
          key={index}
          component={m.img}
          variants={varFade({ distance: 40 }).inDown}
          alt="Home hero"
          src={`${CONFIG.assetsDir}/assets/images/home/logo-${index + 1}.webp`}
          sx={{
            top: 0,
            left: -24,
            m: 'auto',
            bottom: 0,
            width: 900,
            height: 600,
            maxWidth: 'unset',
            zIndex: 9 - index,
            position: 'absolute',
            borderRadius: 10,
          }}
        />
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-1.webp`,
        }),
        py: 10,
        overflow: 'hidden',
        position: 'relative',
        [theme.breakpoints.up('md')]: {
          py: 15,
          minHeight: 760,
          height: '100vh',
          maxHeight: 1440,
          display: 'flex',
          alignItems: 'center',
        },
        ...sx,
      }}
      {...other}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          [theme.breakpoints.up('md')]: {
            columnGap: 10,
            alignItems: 'center',
            justifyContent: 'unset',
          },
        }}
      >
        {renderContent}
        {renderImage}
      </Container>
    </Box>
  );
}
