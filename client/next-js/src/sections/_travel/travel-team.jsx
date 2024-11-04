import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function TravelTeam({ members, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pb: { md: 5 },
        pt: { xs: 5, md: 10 },
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
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <Typography variant="h2">Our team</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
            venenatis ante odio sit amet eros.
          </Typography>
        </Stack>

        <Box
          columnGap={3}
          display="grid"
          rowGap={{ xs: 4, md: 5 }}
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        >
          {members.map((item) => (
            <MemberItem key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function MemberItem({ item, sx, ...other }) {
  const renderSocials = (
    <div>
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
              loading="lazy"
              alt={social.label}
              src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
              sx={{ width: 20, height: 20 }}
            />
          )}
        </IconButton>
      ))}
    </div>
  );

  const transition = (theme) =>
    theme.transitions.create(['opacity', 'transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    });

  return (
    <Box
      sx={{
        transition,
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
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
        '& img': { transition },
        '&:hover': {
          '&::before': { opacity: 1 },
          '& .socials': { opacity: 1 },
          '& img': { transform: 'scale(1.06)' },
        },
        ...sx,
      }}
      {...other}
    >
      <Box
        className="socials"
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          py: 3,
          left: 0,
          width: 1,
          zIndex: 9,
          bottom: 0,
          opacity: 0,
          transition,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="h6">{item.name}</Typography>

        <Typography variant="body2" sx={{ mt: 0.75, mb: 1.5, opacity: 0.72 }}>
          {item.role}
        </Typography>

        {renderSocials}
      </Box>

      <Box
        component="img"
        loading="lazy"
        alt={item.name}
        src={item.photoUrl}
        sx={{ aspectRatio: '3/4', objectFit: 'cover' }}
      />
    </Box>
  );
}
