import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function CareerTeam({ members, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
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
          Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
          ante odio sit amet eros.
        </Typography>
      </Stack>

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
      >
        {members.map((item) => (
          <MemberItem key={item.id} item={item} />
        ))}
      </Box>
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

  const transition = (theme) =>
    theme.transitions.create(['opacity', 'filter', 'transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    });

  return (
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
          bgcolor: (theme) => varAlpha(theme.vars.palette.common.blackChannel, 0.48),
        },
        '&:hover': {
          '&::before': { opacity: 1 },
          '& .content': { opacity: 1 },
          '& img': {
            filter: 'grayscale(0)',
            transform: 'scale(1.06)',
          },
        },
        ...sx,
      }}
      {...other}
    >
      <Box
        className="content"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="flex-end"
        sx={{
          pb: 5,
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 9,
          opacity: 0,
          transition,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="h6">{item.name}</Typography>

        <Typography variant="body2" sx={{ opacity: 0.72, mt: 1, mb: 2 }}>
          {item.role}
        </Typography>

        <Box display="flex">{renderSocials}</Box>
      </Box>

      <Box
        component="img"
        loading="lazy"
        alt={item.name}
        src={item.photoUrl}
        sx={{
          aspectRatio: '1/1',
          objectFit: 'cover',
          filter: 'grayscale(1)',
        }}
      />
    </Box>
  );
}
