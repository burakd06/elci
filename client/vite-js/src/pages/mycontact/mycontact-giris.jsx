import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { SvgColor } from 'src/components/svg-color';
import { useEffect,useState } from 'react';
import TextEditor from 'src/components/texteditor/texteditor';
import { getPageTexts } from 'src/api/comments/getComments';




export function MycontactGiris({ sx, ...other }) {
const [textDataList,setTextDataList] = useState([]); 
const renderSocials = (
    <Box display="flex">
      {_socials.map((social) => (
        <IconButton 
        key={social.value} 
        color="inherit"
        onClick={() => window.open(social.href, '_blank')} >
          
          <SvgColor
            width={20}
            src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
          />
        </IconButton>
      ))}
    </Box>
  );
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
      const response = await getPageTexts("contact")
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
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 3, md: 5 },
        pb: { xs: 5, md: 10 },
        textAlign: { xs: 'center', md: 'left' },
        ...sx,
      }}
      {...other}
    >
      <Container>
     
                  <TextEditor
                   variant="h2"
                   elementType="typography"
                  isAdmin={decodedToken?.isAdmin} 
                  initialText={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactbaslik1" &&
                    d.path === "/company/contact"
                  )?.text} 
                  textId={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactbaslik1" &&
                    d.path === "/company/contact"
                  )?.id}
                  />
        
           <TextEditor
          css={{
            mt: 2,
            mb: { xs: 3, md: 5 },
          }}
                   variant="subtitle1"
                   elementType="typography"
                  isAdmin={decodedToken?.isAdmin} 
                  initialText={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactbaslik2" &&
                    d.path === "/company/contact"
                  )?.text} 
                  textId={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactbaslik2" &&
                    d.path === "/company/contact"
                  )?.id}
                  />

        <Stack spacing={{ xs: 3, md: 5 }} direction={{ xs: 'column', md: 'row' }}>
          <Stack spacing={1}>
            
            <TextEditor
                   variant="subtitle2"
                   elementType="typography"
                  isAdmin={decodedToken?.isAdmin} 
                  initialText={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactemail1" &&
                    d.path === "/company/contact"
                  )?.text} 
                  textId={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactemail1" &&
                    d.path === "/company/contact"
                  )?.id}
                  />
            
            <TextEditor
                  href="mailto:hello@example.com"
                   variant="body2"
                   elementType="typography"
                  isAdmin={decodedToken?.isAdmin} 
                  initialText={textDataList.find(d => 
                    d.element === "Link" &&
                    d.id === "contactemail2" &&
                    d.path === "/company/contact"
                  )?.text} 
                  textId={textDataList.find(d => 
                    d.element === "Link" &&
                    d.id === "contactemail2" &&
                    d.path === "/company/contact"
                  )?.id}
                  />
          </Stack>

          <Stack spacing={1}>
            <TextEditor
                   variant="subtitle2"
                   elementType="typography"
                  isAdmin={decodedToken?.isAdmin} 
                  initialText={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactphone1" &&
                    d.path === "/company/contact"
                  )?.text} 
                  textId={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactphone1" &&
                    d.path === "/company/contact"
                  )?.id}
                  />
            <TextEditor
                   variant="body2"
                   elementType="typography"
                  isAdmin={decodedToken?.isAdmin} 
                  initialText={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactphone2" &&
                    d.path === "/company/contact"
                  )?.text} 
                  textId={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactphone2" &&
                    d.path === "/company/contact"
                  )?.id}
                  />
          </Stack>

          <Stack spacing={1}>
            <TextEditor
                   variant="body2"
                   elementType="typography"
                  isAdmin={decodedToken?.isAdmin} 
                  initialText={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactaddress1" &&
                    d.path === "/company/contact"
                  )?.text} 
                  textId={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactaddress1" &&
                    d.path === "/company/contact"
                  )?.id}
                  />
            <TextEditor
                   variant="body2"
                   elementType="typography"
                  isAdmin={decodedToken?.isAdmin} 
                  initialText={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactaddress2" &&
                    d.path === "/company/contact"
                  )?.text} 
                  textId={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactaddress2" &&
                    d.path === "/company/contact"
                  )?.id}
                  />
          </Stack>

          <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
            
            <TextEditor
                   variant="subtitle2"
                   elementType="yypography"
                  isAdmin={decodedToken?.isAdmin} 
                  initialText={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactfollow" &&
                    d.path === "/company/contact"
                  )?.text} 
                  textId={textDataList.find(d => 
                    d.element === "Typography" &&
                    d.id === "contactfollow" &&
                    d.path === "/company/contact"
                  )?.id}
                  />
            {renderSocials}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
