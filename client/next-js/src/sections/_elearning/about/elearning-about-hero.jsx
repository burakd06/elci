import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';

// ----------------------------------------------------------------------

export function ElearningAboutHero({ sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-1.webp`,
        }),
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 10, md: 20 },
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        alt="Texture"
        src={`${CONFIG.assetsDir}/assets/background/texture-1.webp`}
        sx={{
          top: 0,
          right: 0,
          zIndex: 8,
          opacity: 0.24,
          position: 'absolute',
          height: `calc(100% + 80px)`,
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 9 }}>
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          justifyContent="space-between"
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              display: 'flex',
              color: 'grey.800',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Typography variant="h1">Online courses</Typography>

            <Typography sx={{ mt: 3, mb: 6, maxWidth: 480 }}>
              Nunc nulla. Ut leo. Pellentesque commodo eros a enim. Nunc egestas, augue at
              pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.
            </Typography>

            <Button variant="contained" size="large" color="primary">
              Browse courses
            </Button>
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Box
              component="img"
              alt="Courses online"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-courses-hero.svg`}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
