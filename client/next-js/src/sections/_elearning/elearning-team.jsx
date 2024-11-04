import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function ElearningTeam({ members, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Box sx={{ maxWidth: 480, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Meet our teachers
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Since wire-frame renderings are relatively simple and fast to calculate, they are often
            used in cases
          </Typography>
        </Box>

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
          {members.map((item) => (
            <MemberItem key={item.id} item={item} />
          ))}
        </Box>

        <Button
          variant="outlined"
          size="large"
          color="inherit"
          endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
        >
          View all
        </Button>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function MemberItem({ item, sx, ...other }) {
  const renderSocials = _socials.map((social) => (
    <IconButton key={social.value} color="inherit">
      {(social.value === 'twitter' && (
        <SvgColor
          width={20}
          src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
        />
      )) || (
        <Box
          component="img"
          loading="lazy"
          alt={social.label}
          src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
          sx={{ width: 20, height: 20 }}
        />
      )}
    </IconButton>
  ));

  const renderShape = (
    <Box
      sx={{
        top: 0,
        width: 1,
        height: 8,
        zIndex: 9,
        position: 'absolute',
        color: 'background.paper',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="32" viewBox="0 0 1080 32">
        <path fill="currentColor" d="M1080 32L0 0h1080v32z" />
      </svg>
    </Box>
  );

  const transition = (theme) =>
    theme.transitions.create(['opacity', 'transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    });

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        bgcolor: 'transparent',
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ textAlign: 'center', pt: 3, pb: 1.5 }}>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.disabled' }}>
          {item.role}
        </Typography>
      </Box>

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          '& img': { transition },
          '&::before': {
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            zIndex: 8,
            opacity: 0,
            transition,
            content: "''",
            position: 'absolute',
            backgroundImage: (theme) =>
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${
                theme.vars.palette.common.black
              } 75%)`,
          },
          '&:hover': {
            '&::before': { opacity: 1 },
            '& .socials': { opacity: 1 },
            '& img': { transform: 'scale(1.06)' },
          },
        }}
      >
        {renderShape}

        <Box
          className="socials"
          display="flex"
          justifyContent="center"
          sx={{
            py: 3,
            left: 0,
            width: 1,
            zIndex: 9,
            bottom: 0,
            opacity: 0,
            transition,
            textAlign: 'center',
            position: 'absolute',
            color: 'common.white',
          }}
        >
          {renderSocials}
        </Box>

        <Box
          component="img"
          loading="lazy"
          alt={item.name}
          src={item.photoUrl}
          sx={{ aspectRatio: '1/1', objectFit: 'cover' }}
        />
      </Box>
    </Paper>
  );
}
