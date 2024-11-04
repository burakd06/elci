import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import Button, { buttonClasses } from '@mui/material/Button';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
import { removeLastSlash } from 'src/routes/utils';
import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';
import { Logo } from 'src/components/logo';
import { SvgColor } from 'src/components/svg-color';
import { pageLinks as listItems } from '../config-nav-main';
import TextEditor from 'src/components/texteditor/texteditor';
import { getPageTexts } from 'src/api/comments/getComments';



const AppStoreButton = styled((props) => (
  <Button {...props}>
    <div>
      <Box component="span" sx={{ opacity: 0.72, display: 'block', typography: 'caption' }}>
        {props.caption}
      </Box>
      <Box component="span" sx={{ mt: -0.5, typography: 'h6' }}>
        {props.title}
      </Box>
    </div>
  </Button>




))(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.vars.palette.common.white,
  border: `solid 1px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.vars.palette.grey[900]}, ${theme.vars.palette.common.black})`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

function SectionBlock({ children, layoutQuery, sx }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        gap: 2,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up(layoutQuery)]: {
          textAlign: 'left',
          alignItems: 'flex-start',
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function Footer({ layoutQuery, sx, ...other }) {
  const [textDataList,setTextDataList] = useState([]);
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
      const response = await getPageTexts("footer")
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
  const pathname = usePathname();
  const renderInfo = (
    <>
      <Logo />
      <TextEditor 
      variant="body2" css={{ maxWidth: 360, color: 'text.secondary' }}
        elementType="typography"
          isAdmin={decodedToken?.isAdmin} 
          initialText={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "footer1" &&
            d.path === "footer"
          )?.text} 
          textId={textDataList.find(d => 
            d.element === "Typography" &&
            d.id === "footer1" &&
            d.path === "footer"
          )?.id}
        />
    </>
  );

  const renderCommunity = (
    <>
    <TextEditor 
        variant="h3"
        elementType="typography"
        isAdmin={decodedToken?.isAdmin} 
        initialText={textDataList.find(d => 
          d.element === "Typography" &&
          d.id === "footer2" &&
          d.path === "footer"
        )?.text} 
        textId={textDataList.find(d => 
          d.element === "Typography" &&
          d.id === "footer2" &&
          d.path === "footer"
        )?.id}
      />
      <TextEditor 
        elementType="typography"
        isAdmin={decodedToken?.isAdmin} 
        initialText={textDataList.find(d => 
          d.element === "Typography" &&
          d.id === "footer3" &&
          d.path === "footer"
        )?.text} 
        textId={textDataList.find(d => 
          d.element === "Typography" &&
          d.id === "footer3" &&
          d.path === "footer"
        )?.id}
      />
       <TextEditor 
        elementType="typography"
        isAdmin={decodedToken?.isAdmin} 
        initialText={textDataList.find(d => 
          d.element === "Typography" &&
          d.id === "footer4" &&
          d.path === "footer"
        )?.text} 
        textId={textDataList.find(d => 
          d.element === "Typography" &&
          d.id === "footer4" &&
          d.path === "footer"
        )?.id}
      /> <TextEditor 
      elementType="typography"
      isAdmin={decodedToken?.isAdmin} 
      initialText={textDataList.find(d => 
        d.element === "Typography" &&
        d.id === "footer5" &&
        d.path === "footer"
      )?.text} 
      textId={textDataList.find(d => 
        d.element === "Typography" &&
        d.id === "footer5" &&
        d.path === "footer"
      )?.id}
    />
    </>
  );



  const renderSocials = (
    <>
          <TextEditor 
        variant="h6"
        elementType="typography"
        isAdmin={decodedToken?.isAdmin} 
        initialText={textDataList.find(d => 
          d.element === "Typography" &&
          d.id === "footer6" &&
          d.path === "footer"
        )?.text} 
        textId={textDataList.find(d => 
          d.element === "Typography" &&
          d.id === "footer6" &&
          d.path === "footer"
        )?.id}
      />

      <Box display="flex">
        {_socials.map((social) => (
          <IconButton
            key={social.value}
            color="inherit"
            onClick={() => window.open(social.href, '_blank')
            }>
            {(social.value === 'twitter' && (
              <SvgColor
                width={20}
                src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
              />
            )) || (
                <Box
                  component="img"
                  loading="lazy"
                  alt={social.label}
                  src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
                  sx={{ width: 20, height: 20 }}
                />
              )}
          </IconButton>
        ))}
      </Box>
    </>
  );



  const renderList = (
    <Box
      component="ul"
      sx={{
        columnGap: 2,
        display: 'none',
        columnCount: { xs: 3, lg: 4 },
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'block',
        },
      }}
    >
      {listItems.map((list) => (
        <Stack
          component="li"
          gap={1.25}
          key={list.subheader}
          alignItems="flex-start"
          sx={{ mb: 2, breakInside: 'avoid' }}
        >
          <Typography variant="subtitle2">
            <Link component={RouterLink} to={list.link} underline="none">{list.subheader}</Link> </Typography>

          <Box component="ul" sx={{ gap: 'inherit', display: 'flex', flexDirection: 'column' }}>
            {list.items.map((item) => {
              const active = item.path === removeLastSlash(pathname);

              return (
                <Box component="li" key={item.title} sx={{ display: 'inline-flex' }}>
                  <Link
                    component={RouterLink}
                    href={item.path}
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'text.primary' },
                      ...(active && { color: 'text.primary', fontWeight: 'fontWeightSemiBold' }),
                    }}
                  >
                    {item.title}
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Stack>
      ))
      }
    </Box >
  );

  return (
    <Box
      component="footer"
      sx={{
        borderTop: `solid 1px ${theme.vars.palette.divider}`,
        ...sx,
      }}
      {...other}
    >
      <Container sx={{ py: 10 }}>
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
          <Grid xs={12} md={5} lg={4}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <SectionBlock layoutQuery={layoutQuery} sx={{ gap: 3 }}>
                {renderInfo}
              </SectionBlock>

              <SectionBlock layoutQuery={layoutQuery} sx={{ gap: 1 }}>
                {renderCommunity}
              </SectionBlock>



              <SectionBlock layoutQuery={layoutQuery}>{renderSocials}</SectionBlock>

            </Stack>
          </Grid>

          <Grid xs={12} md={6} lg={6} component="nav">
            {renderList}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container
        sx={{
          py: 3,
          gap: 2.5,
          display: 'flex',
          textAlign: 'center',
          color: 'text.secondary',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Typography variant="caption"> © All rights reserved.</Typography>

        <Box component="span" gap={1.5} display="flex" alignItems="center" justifyContent="center">
          <Link variant="caption" color="inherit">
            Help center
          </Link>
          <Box
            sx={{
              width: 3,
              height: 3,
              opacity: 0.4,
              borderRadius: '50%',
              bgcolor: 'currentColor',
            }}
          />
          <Link variant="caption" color="inherit">
            Terms of service
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
