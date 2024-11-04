import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _mock } from 'src/_mock';

import { AnimateCountUp } from 'src/components/animate';

// ----------------------------------------------------------------------

const IMAGES = [...Array(4)].map((_, index) => _mock.image.travel(index));

const SUMMARY = [
  { name: 'Air tickets sold', number: 130 },
  { name: 'Tours booked', number: 196 },
  { name: 'Site visitors', number: 10679 },
  { name: 'Verified hotels', number: 877 },
];

// ----------------------------------------------------------------------

export function TravelAbout({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pb: 5,
        pt: { xs: 3, md: 5 },
        ...sx,
      }}
      {...other}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 5, md: 10 },
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ mb: 3 }}>
            About us
          </Typography>
          <Typography sx={{ mx: 'auto', maxWidth: 560, color: 'text.secondary' }}>
            Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook
            Marketing, Analytics & More!
          </Typography>
        </Box>

        <Grid container disableEqualOverflow spacing={{ xs: 0, sm: 3 }}>
          {IMAGES.map((item, index) => (
            <Grid key={item} xs={12} sm={6} md={index === 0 ? 6 : 2}>
              <Box
                component="img"
                alt={item}
                src={item}
                sx={{
                  width: 1,
                  height: 360,
                  borderRadius: 2,
                  objectFit: 'cover',
                  ...(index !== 0 && {
                    display: { xs: 'none', sm: 'block' },
                  }),
                }}
              />
            </Grid>
          ))}
        </Grid>

        <Box
          rowGap={5}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        >
          {SUMMARY.map((value) => (
            <Stack key={value.name} spacing={1} alignItems="center">
              <Box gap={0.5} display="flex">
                <AnimateCountUp variant="h2" to={value.number} toFixed={2} />
                <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                  +
                </Box>
              </Box>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {value.name}
              </Typography>
            </Stack>
          ))}
        </Box>

        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          justifyContent="space-between"
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid xs={12} md={6} lg={5}>
            <Box
              sx={{
                mb: 2,
                width: 24,
                height: 3,
                borderRadius: 3,
                bgcolor: 'primary.main',
                mx: { xs: 'auto', md: 0 },
              }}
            />
            <Typography variant="h3">
              Maecenas malesuada. Cras ultricies mi eu turpis hendrerit fringilla Nunc egestas
            </Typography>
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Fusce convallis metus id felis luctus
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet imperdiet orci.
              Vestibulum eu odio. Phasellus nec sem in justo pellentesque facilisis.
            </Typography>

            <br />

            <Typography sx={{ color: 'text.secondary' }}>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Maecenas nec odio
              et ante tincidunt tempus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum
              nec, nisi. Vestibulum eu odio. Curabitur ullamcorper ultricies nisi.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
