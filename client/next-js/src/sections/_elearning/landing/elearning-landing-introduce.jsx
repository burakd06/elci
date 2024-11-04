import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

export function ElearningLandingIntroduce({ sx, ...other }) {
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
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            color: 'primary.main',
            mb: { xs: 5, md: 10 },
          }}
        >
          Nullam accumsan lorem in dui.
        </Typography>

        <Grid
          container
          disableEqualOverflow
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 3 }}
        >
          <Grid xs={12} md={6} lg={5}>
            <Image
              alt="Summary"
              src={`${CONFIG.assetsDir}/assets/images/course/home-summary.webp`}
              sx={{
                width: 1,
                borderRadius: 2,
                aspectRatio: { xs: '4/3', md: '4/6' },
              }}
            />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Phasellus gravida semper nisi. Vestibulum rutrum
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget lorem. Etiam
              vitae tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos hymenaeos.
            </Typography>

            <Box
              display="flex"
              gap={{ xs: 5, md: 10 }}
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{ mt: { xs: 5, md: 10 } }}
            >
              <Stack spacing={3}>
                <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
                <Typography sx={{ color: 'text.secondary' }}>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis
                </Typography>
              </Stack>

              <Stack spacing={3}>
                <Box component="span" sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
                <Typography sx={{ color: 'text.secondary' }}>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
