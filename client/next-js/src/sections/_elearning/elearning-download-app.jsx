import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button, { buttonClasses } from '@mui/material/Button';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

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

// ----------------------------------------------------------------------

export function ElearningDownloadApp({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        pt: { xs: 0, md: 10 },
        pb: { xs: 10, md: 15 },
        '&::before': {
          backgroundSize: 'auto 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right -80px',
          backgroundImage: `url(${CONFIG.assetsDir}/assets/background/texture-2.webp)`,
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: -1,
          content: "''",
          opacity: 0.24,
          position: 'absolute',
        },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid xs={12} md={6} lg={5}>
            <Stack sx={{ textAlign: 'center' }}>
              <Typography variant="h2"> Download app </Typography>

              <Typography sx={{ mt: 3, mb: 5 }}>
                Now finding the new job just got even easier with our new app!
              </Typography>
            </Stack>

            <Stack
              alignItems="center"
              sx={{
                py: 5,
                borderRadius: 2,
                px: { xs: 3, md: 5 },
                border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
              }}
            >
              <Box gap={3} display="flex" alignItems="center" sx={{ typography: 'h6' }}>
                <SvgColor width={120} src={`${CONFIG.assetsDir}/assets/icons/auth/ic-qrcode.svg`} />
                Scan QR code to
                <br /> install on your device
              </Box>

              <Divider sx={{ my: 5, width: 1, borderStyle: 'dashed' }} />

              <Box gap={2} display="flex" flexWrap="wrap" justifyContent="center">
                <AppStoreButton
                  startIcon={<Iconify width={28} icon="ri:apple-fill" />}
                  caption="Download on the"
                  title="Apple Store"
                />
                <AppStoreButton
                  startIcon={<Iconify width={28} icon="logos:google-play-icon" />}
                  caption="Download from"
                  title="Google Play"
                />
              </Box>
            </Stack>
          </Grid>

          <Grid
            xs={12}
            md={6}
            lg={6}
            sx={{
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            <Box
              component="img"
              loading="lazy"
              alt="Mobile app"
              src={`${CONFIG.assetsDir}/assets/images/course/download-app.webp`}
              sx={{ width: 560 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
