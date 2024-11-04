import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const ROWS = [
  'First class flights',
  '5 star accommodations',
  'Inclusive packages',
  'Latest model vehicles',
  'Handpicked hotels',
  'Accesibility managment',
];

// ----------------------------------------------------------------------

export function TravelLandingFavoriteDestinations({ tours, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          alignItems={{ md: 'center' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid xs={12} md={4}>
            <Typography variant="h2">Our favorite destinations</Typography>

            <Typography sx={{ my: 3, color: 'text.secondary' }}>
              Since wire-frame renderings are relatively simple and fast to calculate, they are
              often used in cases
            </Typography>

            <Stack spacing={2}>
              {ROWS.map((line) => (
                <Stack key={line} direction="row" alignItems="center" sx={{ typography: 'body1' }}>
                  <Box
                    sx={{
                      mr: 2,
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                    }}
                  />
                  {line}
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid container xs={12} md={6} spacing={{ xs: 4, md: 3 }}>
            {tours.map((tour, index) => (
              <Grid
                key={tour.id}
                xs={12}
                sm={6}
                sx={{
                  ...(index === 1 && {
                    display: { md: 'inline-flex' },
                    alignItems: { md: 'flex-end' },
                  }),
                }}
              >
                <DestinationItem tour={tour} order={index % 3} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function DestinationItem({ tour, order }) {
  return (
    <Box
      sx={{
        width: 1,
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        '&:before': {
          width: 1,
          height: 1,
          content: "''",
          display: 'block',
          position: 'absolute',
          background: (theme) =>
            `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${
              theme.vars.palette.common.black
            } 75%)`,
        },
      }}
    >
      <Box
        component="img"
        alt={tour.location}
        src={tour.coverUrl}
        sx={{
          objectFit: 'cover',
          aspectRatio: { xs: '1/1', md: '4/6' },
          ...(order && {
            aspectRatio: '1/1',
          }),
        }}
      />

      <Box
        sx={{
          p: 3,
          left: 0,
          width: 1,
          bottom: 0,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Link component={RouterLink} href={paths.travel.post} color="inherit" variant="h6" noWrap>
          {tour.location}
        </Link>

        <Box gap={1} display="flex" alignItems="center" sx={{ mt: 1 }}>
          <Iconify icon="carbon:location" sx={{ color: 'primary.main' }} />
          <Typography variant="body2" noWrap sx={{ opacity: 0.72 }}>
            {tour.continent}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
