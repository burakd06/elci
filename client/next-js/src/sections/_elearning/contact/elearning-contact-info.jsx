import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { CONFIG } from 'src/config-global';
import { _offices, _socials } from 'src/_mock';

import { Map } from 'src/components/map';
import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function ElearningContactInfo({ sx, ...other }) {
  const renderSocials = (
    <Box display="flex">
      {_socials.map((social) => (
        <IconButton key={social.value} color="inherit">
          {(social.value === 'twitter' && (
            <SvgColor
              width={20}
              src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
            />
          )) || (
            <Box
              component="img"
              alt={social.label}
              src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
              sx={{ width: 20, height: 20 }}
            />
          )}
        </IconButton>
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 3, md: 5 },
        pb: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
          <Grid xs={12} md={6} lg={4}>
            <Typography variant="h2" sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
              Get in touch
            </Typography>

            <Stack spacing={3}>
              <Box gap={1.5} display="flex">
                <Iconify width={22} icon="carbon:email" />
                <div>
                  <Box component="span" sx={{ mb: 0.5, typography: 'subtitle2', display: 'block' }}>
                    Email
                  </Box>
                  <Link color="inherit" variant="body2" href="mailto:hello@example.com">
                    hello@example.com
                  </Link>
                </div>
              </Box>

              <Box gap={1.5} display="flex">
                <Iconify width={22} icon="solar:smartphone-outline" />
                <div>
                  <Box component="span" sx={{ mb: 0.5, typography: 'subtitle2', display: 'block' }}>
                    Phone
                  </Box>
                  <Typography variant="body2">(907) 555-0101</Typography>
                </div>
              </Box>

              <Box gap={1.5} display="flex">
                <Iconify width={22} icon="carbon:location" />
                <div>
                  <Box component="span" sx={{ mb: 0.5, typography: 'subtitle2', display: 'block' }}>
                    Address
                  </Box>
                  <Typography variant="body2">
                    3891 Ranchview Dr. Richardson, California 62639
                  </Typography>
                </div>
              </Box>

              <Divider sx={{ borderStyle: 'dashed', width: 1 }} />

              <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
                <Typography variant="overline">Follow us</Typography>
                {renderSocials}
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} lg={7}>
            <Map locations={_offices} sx={{ borderRadius: 2 }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
