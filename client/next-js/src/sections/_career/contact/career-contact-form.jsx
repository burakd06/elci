import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export const CareerContactSchema = zod.object({
  fullName: zod.string().min(1, { message: 'Full name is required!' }),
  subject: zod.string().min(1, { message: 'Subject is required!' }),
  message: zod.string().min(1, { message: 'Message is required!' }),
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
});

// ----------------------------------------------------------------------

export function CareerContactForm({ sx, ...other }) {
  const defaultValues = {
    fullName: '',
    subject: '',
    email: '',
    message: '',
  };

  const methods = useForm({
    resolver: zodResolver(CareerContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Box component="section" sx={{ py: 10, ...sx }} {...other}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} md={8}>
            <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
              <Typography variant="h3">Drop us a line</Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                We normally respond within 2 business days.
              </Typography>
            </Stack>

            <Form methods={methods} onSubmit={onSubmit}>
              <Stack spacing={2.5} alignItems="center">
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
                  sx={{ mt: 2.5 }}
                >
                  Send message
                </LoadingButton>
              </Stack>
            </Form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
