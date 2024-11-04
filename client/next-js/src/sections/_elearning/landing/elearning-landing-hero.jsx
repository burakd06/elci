import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';

import { fShortenNumber } from 'src/utils/format-number';

import { _mock } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';
import ElearningHeroIllustration from 'src/assets/illustrations/elearning-hero-illustration';

import { Iconify } from 'src/components/iconify';
import { PlayerDialog } from 'src/components/player';

// ----------------------------------------------------------------------

const SUMMARY = [
  { value: 14000, label: 'Learners', color: 'warning' },
  { value: 1050, label: 'Courses', color: 'error' },
  { value: 59000, label: 'Graduates', color: 'success' },
];

// ----------------------------------------------------------------------

export function ElearningLandingHero({ sx, ...other }) {
  const theme = useTheme();

  const openVideo = useBoolean();

  const renderContent = (
    <Stack
      alignItems={{ xs: 'center', md: 'flex-start' }}
      sx={{
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <Typography variant="h1">
        Free
        <Box component="span" sx={{ color: 'text.disabled' }}>
          {` Online `}
        </Box>
        <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline' }}>
          {` Courses`}
        </Box>
        {` from the experts`}
      </Typography>

      <Typography sx={{ mt: 3, maxWidth: 480, color: 'text.secondary' }}>
        Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
        ante odio sit amet eros.
      </Typography>

      <Box
        gap={2.5}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'unset' }}
        sx={{ mt: 5, mb: 8 }}
      >
        <Button color="inherit" size="large" variant="contained">
          Ready start
        </Button>

        <Box gap={1.5} display="flex" alignItems="center" sx={{ typography: 'h6' }}>
          <Fab size="medium" color="info" onClick={openVideo.onTrue}>
            <Iconify width={22} icon="solar:play-outline" />
          </Fab>
          Watch video
        </Box>
      </Box>

      <Box display="flex" gap={{ xs: 5, sm: 10 }} justifyContent={{ xs: 'center', md: 'unset' }}>
        {SUMMARY.map((item) => (
          <Stack key={item.value} spacing={0.5} sx={{ position: 'relative' }}>
            <Box
              sx={{
                top: 8,
                left: -4,
                width: 24,
                height: 24,
                opacity: 0.24,
                borderRadius: '50%',
                position: 'absolute',
                bgcolor: `${item.color}.main`,
              }}
            />
            <Typography variant="h3">{fShortenNumber(item.value)}+</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.label}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Stack>
  );

  return (
    <>
      <Box
        component="section"
        sx={{
          ...bgGradient({
            color: `to bottom, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}`,
            imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-1.webp`,
          }),
          py: 10,
          overflow: 'hidden',
          position: 'relative',
          [theme.breakpoints.up('md')]: {
            py: 15,
            minHeight: 760,
            height: '100vh',
            maxHeight: 1440,
            display: 'flex',
            alignItems: 'center',
          },
          ...sx,
        }}
        {...other}
      >
        <Container>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid xs={12} md={6} lg={5}>
              {renderContent}
            </Grid>

            <Grid xs={12} md={6} lg={7} sx={{ display: { xs: 'none', md: 'block' } }}>
              <ElearningHeroIllustration />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <PlayerDialog open={openVideo.value} onClose={openVideo.onFalse} videoPath={_mock.video(0)} />
    </>
  );
}
