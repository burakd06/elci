import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { CONFIG } from 'src/config-global';

import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export const TravelContactSchema = zod.object({
  fullName: zod.string().min(1, { message: 'Full name is required!' }),
  subject: zod.string().min(1, { message: 'Subject is required!' }),
  message: zod.string().min(1, { message: 'Message is required!' }),
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
});

// ----------------------------------------------------------------------

export function TravelContactForm({ sx, ...other }) {
  const defaultValues = {
    fullName: '',
    subject: '',
    email: '',
    message: '',
  };

  const methods = useForm({
    resolver: zodResolver(TravelContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log('DATA', data);
      reset();
    } catch (error) {
      console.error(error);
    }
  });

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
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={6} lg={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              component="img"
              loading="lazy"
              alt="Travel contact"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-travel-contact.svg`}
              sx={{ width: 480, height: 480 }}
            />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Stack spacing={2} sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h3">Drop us a line</Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                We normally respond within 2 business days.
              </Typography>
            </Stack>

            <Form methods={methods} onSubmit={onSubmit}>
              <Stack spacing={2.5} alignItems="flex-start">
                <Field.Text name="fullName" label="Full name" />
                <Field.Text name="email" label="Email" />
                <Field.Text name="subject" label="Subject" />
                <Field.Text name="message" multiline rows={4} label="Message" />

                <LoadingButton
                  size="large"
                  type="submit"
                  variant="contained"
                  color="inherit"
                  loading={isSubmitting}
                  sx={{
                    alignSelf: { xs: 'center', md: 'unset' },
                  }}
                >
                  Send request
                </LoadingButton>
              </Stack>
            </Form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
