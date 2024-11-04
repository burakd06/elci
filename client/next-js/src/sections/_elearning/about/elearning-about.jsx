import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

import { Image } from 'src/components/image';
import { AnimateCountUp } from 'src/components/animate';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    name: 'Learners',
    number: 14000,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
  {
    name: 'Courses',
    number: 1050,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
  {
    name: 'Graduates',
    number: 52000,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
];

// ----------------------------------------------------------------------

export function ElearningAbout({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 2, md: 8 }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid xs={12} md={6}>
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              Nullam accumsan lorem in dui.
            </Typography>
          </Grid>

          <Grid xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Effective forms advertising internet web site
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Over 92% of computers are infected with Adware and spyware. Such software is rarely
              accompanied by uninstall utility and even when it is it almost always leaves broken
              Windows
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 8 }}
          direction={{ md: 'row-reverse' }}
          justifyContent={{ md: 'space-between' }}
          sx={{ pt: { xs: 5, md: 10 } }}
        >
          <Grid xs={12} md={6} lg={6}>
            <Image
              alt="About"
              src={`${CONFIG.assetsDir}/assets/images/course/about-summary.webp`}
              ratio="3/4"
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              display: 'flex',
              gap: { xs: 5, md: 10 },
              flexDirection: 'column',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {SUMMARY.map((value) => (
              <div key={value.name}>
                <Box
                  component="span"
                  sx={{
                    opacity: 0.48,
                    display: 'block',
                    typography: 'h4',
                    color: 'text.disabled',
                  }}
                >
                  {value.name}
                </Box>

                <AnimateCountUp variant="h2" to={value.number} toFixed={2} sx={{ mt: 1, mb: 2 }} />

                <Typography sx={{ color: 'text.secondary' }}>{value.description}</Typography>
              </div>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
