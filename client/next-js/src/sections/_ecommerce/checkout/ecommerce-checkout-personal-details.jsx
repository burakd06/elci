import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { useBoolean } from 'src/hooks/use-boolean';

import { Field } from 'src/components/hook-form';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function EcommerceCheckoutPersonalDetails({ sx, ...other }) {
  const passwordShow = useBoolean();

  return (
    <Box sx={sx} {...other}>
      <Stack direction="row" flexWrap="wrap" alignItems="center" spacing={1} sx={{ mb: 4 }}>
        <Typography variant="subtitle2">Sign in with:</Typography>

        <Button
          color="inherit"
          variant="outlined"
          startIcon={
            <Box
              component="img"
              alt="Facebook"
              src="/assets/icons/socials/ic-facebook.svg"
              sx={{ width: 20, height: 20 }}
            />
          }
        >
          Facebook
        </Button>

        <Button
          color="inherit"
          variant="outlined"
          startIcon={
            <Box
              component="img"
              alt="Google"
              src="/assets/icons/socials/ic-google.svg"
              sx={{ width: 20, height: 20 }}
            />
          }
        >
          Google
        </Button>

        <Button color="inherit" variant="outlined" startIcon={<Iconify icon="carbon:email" />}>
          Continue with email
        </Button>
      </Stack>

      <Box
        rowGap={2.5}
        columnGap={2}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      >
        <Field.Text name="personal.firstName" label="First name" />

        <Field.Text name="personal.lastName" label="Last name" />

        <Field.Text name="personal.emailAddress" label="Email address" />

        <Field.Text name="personal.phoneNumber" label="Phone number" />

        <Field.Text
          name="personal.password"
          label="Password"
          type={passwordShow.value ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={passwordShow.onToggle} edge="end">
                  <Iconify
                    icon={passwordShow.value ? 'solar:eye-outline' : 'solar:eye-closed-outline'}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Field.Text
          name="personal.confirmPassword"
          label="Confirm password"
          type={passwordShow.value ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={passwordShow.onToggle} edge="end">
                  <Iconify
                    icon={passwordShow.value ? 'solar:eye-outline' : 'solar:eye-closed-outline'}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}
