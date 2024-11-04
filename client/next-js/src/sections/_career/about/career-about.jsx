import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { AnimateCountUp } from 'src/components/animate';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Jobs', number: 2230000 },
  { name: 'Successful hiring', number: 500000 },
  { name: 'Partners', number: 250 },
  { name: 'Employee', number: 1560 },
];

// ----------------------------------------------------------------------

export function CareerAbout({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 3, md: 5 },
        pb: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography
          variant="overline"
          sx={{
            mb: 1,
            display: 'block',
            color: 'primary.main',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          About us
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          sx={{
            mb: { xs: 5, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Grid xs={12} md={6} lg={5}>
            <Typography variant="h2">We make the best for all our customers.</Typography>
          </Grid>

          <Grid xs={12} md={6} lg={6} sx={{ color: 'text.secondary' }}>
            <Stack spacing={{ xs: 3, md: 10 }} direction={{ xs: 'column', md: 'row' }}>
              <Typography>
                Curabitur ullamcorper ultricies nisi. Sed mollis, eros et ultrices tempus, mauris
                ipsum aliquam libero, non adipiscing dolor urna a orci.
              </Typography>

              <Typography>
                Donec vitae sapien ut libero venenatis faucibus. Vestibulum fringilla pede sit amet
                augue. Vivamus euismod mauris.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Section />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function Section({ sx, ...other }) {
  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${CONFIG.assetsDir}/assets/images/career/about-team.webp)`,
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          py: 10,
          ml: 'auto',
          textAlign: 'center',
          color: 'common.white',
          width: { lg: 0.5 },
          px: { xs: 2.5, md: 5 },
          backgroundImage: (theme) =>
            `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${
              theme.vars.palette.common.black
            } 75%)`,
        }}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Our agency has been
        </Typography>

        <Typography sx={{ mb: 5, opacity: 0.72 }}>
          Hello. Our agency has been present for over 20 years. We make the best for all our
          customers.
        </Typography>

        <Box gap={5} display="grid" gridTemplateColumns="repeat(2, 1fr)">
          {SUMMARY.map((value) => (
            <Stack
              key={value.name}
              spacing={1}
              alignItems="center"
              sx={{ color: 'grey.500', overflow: 'hidden', typography: 'body2' }}
            >
              <Box gap={0.5} display="flex" sx={{ color: 'primary.main' }}>
                <AnimateCountUp variant="h2" to={value.number} toFixed={2} />
                <Box component="span" sx={{ typography: 'h3' }}>
                  +
                </Box>
              </Box>
              {value.name}
            </Stack>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
