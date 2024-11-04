import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

import { AnimateCountUp } from 'src/components/animate';

// ----------------------------------------------------------------------

const iconPath = (name) => `${CONFIG.assetsDir}/assets/icons/travel/${name}`;

const SUMMARY = [
  { total: 130, description: 'Air tickets sold', icon: iconPath('ic-tickets.svg') },
  { total: 196, description: 'Tours booked', icon: iconPath('ic-booking.svg') },
  { total: 10670, description: 'Site visitors', icon: iconPath('ic-site-visitors.svg') },
  { total: 877, description: 'Verified hotels', icon: iconPath('ic-verified-hotels.svg') },
];

// ----------------------------------------------------------------------

export function TravelLandingSummary({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        py: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 480,
            mb: { xs: 5, md: 10 },
          }}
        >
          <Typography variant="h2">Fastest way to book over 450 great tours</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Since wire-frame renderings are relatively simple and fast to calculate, they are often
            used in cases
          </Typography>
        </Stack>

        <Box
          display="grid"
          gap={3}
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {SUMMARY.map((value) => (
            <Stack key={value.description} alignItems="center">
              <Box
                component="img"
                loading="lazy"
                alt={value.description}
                src={value.icon}
                sx={{ mb: 3, width: 80, height: 80 }}
              />

              <AnimateCountUp variant="h3" to={value.total} toFixed={2} sx={{ mb: 1 }} />

              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </Stack>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
