import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { TravelTourItem } from '../list/travel-tour-item';

// ----------------------------------------------------------------------

export function TravelLandingTourFeatured({ tours, sx, ...other }) {
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
        <Stack spacing={3} sx={{ textAlign: 'center' }}>
          <Typography variant="h2">Featured tours</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            {`Our Featured Tours can help you find the trip that's perfect for you!`}
          </Typography>
        </Stack>

        <Box
          display="grid"
          gap={{ xs: 4, md: 3 }}
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          sx={{ my: { xs: 5, md: 10 } }}
        >
          {tours.map((tour) => (
            <TravelTourItem key={tour.id} tour={tour} />
          ))}
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            component={RouterLink}
            href={paths.travel.tours}
            size="large"
            variant="outlined"
            color="inherit"
            endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
          >
            View all
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
