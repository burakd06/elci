import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const VISIONS = [
  {
    name: 'Vestibulum',
    description: 'In dui magna, posuere eget, vestibulum et, tempor auctor, justo.',
  },
  {
    name: 'Fusce',
    description: 'Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.',
  },
  {
    name: 'Praesent',
    description: 'Suspendisse feugiat. Quisque id odio.',
  },
];

// ----------------------------------------------------------------------

export function TravelAboutOurVision({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        py: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Stack
          spacing={3}
          alignItems={{ xs: 'center', md: 'unset' }}
          sx={{
            mb: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Our mission</Typography>
          <Typography sx={{ maxWidth: 480, color: 'text.secondary' }}>
            Curabitur ullamcorper ultricies nisi. Aenean viverra rhoncus pede.
          </Typography>
        </Stack>

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 3 }}
        >
          <Grid xs={12} md={6} lg={5} sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
            <Box
              component="img"
              loading="lazy"
              alt="About vision"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-vision.svg`}
              sx={{ width: 480, height: 480 }}
            />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Stack alignItems={{ md: 'flex-end' }} sx={{ position: 'relative' }}>
              {VISIONS.map((item, index) => (
                <Card
                  key={item.name}
                  sx={(theme) => ({
                    p: 4,
                    mt: 4,
                    [theme.breakpoints.up('md')]: {
                      width: 'calc(50% - 16px)',
                      ...(index === 0 && {
                        top: 0,
                        left: 0,
                        bottom: 0,
                        my: 'auto',
                        boxShadow: 0,
                        maxHeight: 304,
                        display: 'flex',
                        position: 'absolute',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }),
                      ...(index === 1 && { boxShadow: theme.customShadows.z24 }),
                      ...(index === 2 && { boxShadow: 0 }),
                    },
                  })}
                >
                  <Typography
                    variant="h1"
                    component="span"
                    sx={{ opacity: 0.24, display: 'block', color: 'text.disabled' }}
                  >
                    {`0${index + 1}`}
                  </Typography>
                  <Typography component="h6" variant="h5" sx={{ mb: 2, mt: 3 }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
