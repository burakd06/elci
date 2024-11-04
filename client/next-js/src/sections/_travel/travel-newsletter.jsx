import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { CONFIG } from 'src/config-global';
import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function TravelNewsletter({ sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        position: 'relative',
        bgcolor: 'common.black',
        '&::before, &::after': {
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          content: '""',
          position: 'absolute',
        },
        '&::before': {
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${CONFIG.assetsDir}/assets/images/travel/newsletter.webp)`,
          [theme.breakpoints.up('md')]: {
            width: 0.5,
          },
        },
        '&::after': {
          backgroundColor: varAlpha(theme.vars.palette.common.blackChannel, 0.72),
          [theme.breakpoints.up('md')]: {
            left: 1,
            width: 0.5,
            display: 'block',
            backgroundColor: 'transparent',
            backgroundImage: `linear-gradient(to right, ${varAlpha(theme.vars.palette.common.blackChannel, 0)}, ${theme.vars.palette.common.black})`,
          },
        },
        ...sx,
      }}
      {...other}
    >
      <Container sx={{ zIndex: 1, position: 'relative' }}>
        <Grid container spacing={3} justifyContent="flex-end">
          <Grid
            xs={12}
            md={5}
            sx={{
              color: 'common.white',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              variant="h2"
              component="h6"
              sx={{
                ...textGradient(
                  `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                ),
                mb: 3,
                display: 'inline-flex',
              }}
            >
              Newsletter
            </Typography>

            <Typography sx={{ mb: 5 }}>
              Sign up now to receive hot special offers
              <br /> and information about the best tours!
            </Typography>

            <TextField
              fullWidth
              hiddenLabel
              placeholder="Enter your email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      size="large"
                      color="primary"
                      variant="contained"
                      sx={{ minWidth: 48, px: 0, mr: -1 }}
                    >
                      <Iconify icon="solar:alt-arrow-right-outline" />
                    </Button>
                  </InputAdornment>
                ),
                sx: {
                  maxWidth: 480,
                  color: 'common.white',
                  mx: { xs: 'auto', md: 'unset' },
                  bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
