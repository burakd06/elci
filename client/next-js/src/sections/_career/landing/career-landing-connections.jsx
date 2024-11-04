import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { Carousel, useCarousel, CarouselArrowBasicButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

export function CareerLandingConnections({ countries, sx, ...other }) {
  const carousel = useCarousel({
    slidesToShow: { xs: 1, sm: 2, md: 'auto' },
    slideSpacing: '32px',
  });

  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        pt: { xs: 5, md: 15 },
        pb: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <SvgColor
        width={780}
        height={646}
        src={`${CONFIG.assetsDir}/assets/illustrations/illustration-map.svg`}
        sx={{
          left: -64,
          top: '50%',
          zIndex: -1,
          opacity: 0.64,
          position: 'absolute',
          color: 'text.disabled',
          transform: 'translateY(-50%)',
          display: { xs: 'none', md: 'block' },
        }}
      />

      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={4}>
            <Box sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
              <Typography variant="h2">Global connections</Typography>

              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla neque dolor,
                sagittis eget, iaculis quis.
              </Typography>

              <Button
                component={RouterLink}
                href={paths.career.jobs}
                color="inherit"
                size="large"
                variant="contained"
                endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
              >
                View all
              </Button>
            </Box>
          </Grid>

          <Grid xs={12} md={7}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              sx={{
                width: { md: 'calc(50vw + 120px)' },
              }}
            >
              <Carousel carousel={carousel} sx={{ pb: 5, pt: { xs: 5, md: 0 } }}>
                {countries.map((country) => (
                  <Link
                    component={RouterLink}
                    key={country.id}
                    href={paths.career.jobs}
                    underline="none"
                  >
                    <JobItem country={country} />
                  </Link>
                ))}
              </Carousel>

              <CarouselArrowBasicButtons
                {...carousel.arrows}
                options={carousel.options}
                sx={{ gap: 1 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function JobItem({ country }) {
  const transition = (theme) =>
    theme.transitions.create(['opacity', 'transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    });

  return (
    <Card
      sx={{
        width: { md: 280 },
        '& img': { transition },
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
          '& img': { transform: 'scale(1.06)' },
        },
      }}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <Box
          component="img"
          loading="lazy"
          alt={country.location}
          src={country.coverUrl}
          sx={{ aspectRatio: '3/4', objectFit: 'cover' }}
        />
      </Box>

      <Box sx={{ textAlign: 'center', p: 2.5 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {country.location}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.disabled' }}>
          {country.totalJobs} jobs
        </Typography>
      </Box>
    </Card>
  );
}
