import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { fDate } from 'src/utils/format-time';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function TravelPostHero({ heroUrl, duration, createdAt, title, sx, ...other }) {
  const theme = useTheme();

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
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${theme.vars.palette.common.black} 75%`,
          imgUrl: heroUrl,
        }),
        position: 'relative',
        py: { xs: 15, md: 20 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <Stack
              spacing={3}
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                color: 'common.white',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="body2" sx={{ opacity: 0.72 }}>
                {duration}
              </Typography>

              <Typography variant="h2" component="h1">
                {title}
              </Typography>

              <Typography variant="caption" sx={{ opacity: 0.72 }}>
                {fDate(createdAt)}
              </Typography>

              {renderSocials}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
