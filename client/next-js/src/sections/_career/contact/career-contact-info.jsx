import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function CareerContactInfo({ sx, ...other }) {
  const renderSocials = (
    <Box display="flex">
      {_socials.map((social) => (
        <IconButton key={social.value} color="inherit">
          <SvgColor
            width={20}
            src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
          />
        </IconButton>
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 3, md: 5 },
        pb: { xs: 5, md: 10 },
        textAlign: { xs: 'center', md: 'left' },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography variant="h2">Get in touch</Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mt: 2,
            mb: { xs: 3, md: 5 },
          }}
        >{`We'd love to talk about how we can help you.`}</Typography>

        <Stack spacing={{ xs: 3, md: 5 }} direction={{ xs: 'column', md: 'row' }}>
          <Stack spacing={1}>
            <Typography variant="subtitle2">Email</Typography>
            <Link variant="body2" color="inherit" href="mailto:hello@example.com">
              hello@example.com
            </Link>
          </Stack>

          <Stack spacing={1}>
            <Typography variant="subtitle2">Phone</Typography>
            <Typography variant="body2">(907) 555-0101</Typography>
          </Stack>

          <Stack spacing={1}>
            <Typography variant="subtitle2">Address</Typography>
            <Typography variant="body2">3891 Ranchview Dr. Richardson, California 62639</Typography>
          </Stack>

          <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Typography variant="subtitle2">Follow us</Typography>
            {renderSocials}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
