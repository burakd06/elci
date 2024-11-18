import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { CONFIG } from 'src/config-global';
import { varAlpha, textGradient } from 'src/theme/styles';
import { varFade, MotionViewport } from 'src/components/animate';
import { useEffect,useState } from 'react';
import TextEditor from 'src/components/texteditor/texteditor';
import { getPageTexts,getImages } from 'src/api/comments/getComments';
import ImageEditor from 'src/components/imageeditor/imageeditor';


function AnimatedDiv({ children }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}



export function HomeBanner({ sx, ...other }) {
  const theme = useTheme();
  const [textDataList, setTextDataList] = useState([]);
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
        backgroundImage: `radial-gradient(80% 150%, ${varAlpha(theme.vars.palette.common.blackChannel, 0.4)} 0%, ${theme.vars.palette.common.black} 100%), url(${CONFIG.assetsDir}/assets/images/home/fordesigner.webp)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'flex',
        textAlign: 'center',
        bgcolor: 'grey.700',
        color: 'common.white',
        justifyContent: 'center',
        py: { xs: 10, md: 15 },
        ...sx,
      }}
    >
      <MotionViewport>
        <AnimatedDiv>
         
          <TextEditor
          css={{
            ...textGradient(
              `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
            ),
            mt: 2,
            mb: 5,
          }}
            variant="h2"
            isAdmin={decodedToken?.isAdmin} 
            initialText={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "homeBanner" &&
              d.path === "/"
            )?.text} 
            textId={textDataList.find(d => 
              d.element === "Typography" &&
              d.id === "homeBanner" &&
              d.path === "/"
            )?.id}
          />
        </AnimatedDiv>
      </MotionViewport>
    </Box>
  );
}
