import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

export function CareerNewsletter({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        py: 15,
        background: (theme) =>
          `radial-gradient(50% 160% at 50% 50%, ${varAlpha(theme.vars.palette.common.blackChannel, 0.4)} 0%, ${theme.vars.palette.common.black} 100%), url(${CONFIG.assetsDir}/assets/images/career/newsletter.webp)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Stack spacing={3} alignItems="center" sx={{ color: 'common.white', textAlign: 'center' }}>
          <Typography variant="h2">Get the right job for you</Typography>

          <Typography>
            Subscribe to get updated on latest and relevant career opportunities
          </Typography>

          <InputBase
            placeholder="Enter your email"
            endAdornment={
              <InputAdornment position="end">
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  sx={{
                    height: 54,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  Subscribe
                </Button>
              </InputAdornment>
            }
            inputProps={{ id: 'email-input' }}
            sx={{
              pl: 1.5,
              width: 1,
              height: 54,
              maxWidth: 560,
              borderRadius: 1,
              bgcolor: 'common.white',
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
