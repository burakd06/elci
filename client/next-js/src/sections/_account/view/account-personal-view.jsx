'use client';

import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useBoolean } from 'src/hooks/use-boolean';

import { varAlpha } from 'src/theme/styles';
import { UserPhoto } from 'src/layouts/template/account';

import { Iconify } from 'src/components/iconify';
import { Form, Field, schemaHelper } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export const AccountPersonalSchema = zod.object({
  firstName: zod.string().min(1, { message: 'First name is required!' }),
  lastName: zod.string().min(1, { message: 'Last name is required!' }),
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  phoneNumber: zod.string().min(1, { message: 'Phone number is required!' }),
  birthday: schemaHelper.date({ message: { required_error: 'Birthday is required!' } }),
  gender: zod.string().min(1, { message: 'Gender is required!' }),
  streetAddress: zod.string().min(1, { message: 'Street address is required!' }),
  city: zod.string().min(1, { message: 'City is required!' }),
  country: schemaHelper.objectOrNull({
    message: { required_error: 'Country is required!' },
  }),
  //
  zipCode: zod.string(),
});

export const AccountPasswordSchema = zod
  .object({
    oldPassword: zod
      .string()
      .min(1, { message: 'Password is required!' })
      .min(6, { message: 'Password must be at least 6 characters!' }),
    newPassword: zod.string().min(1, { message: 'New password is required!' }),
    confirmNewPassword: zod.string().min(1, { message: 'Confirm password is required!' }),
  })
  .refine((data) => data.oldPassword !== data.newPassword, {
    message: 'New password must be different than old password',
    path: ['newPassword'],
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords do not match!',
    path: ['confirmNewPassword'],
  });

// ----------------------------------------------------------------------

export function AccountPersonalView() {
  const passwordShow = useBoolean();

  const personalMethods = useForm({
    resolver: zodResolver(AccountPersonalSchema),
    defaultValues: {
      firstName: 'Jayvion',
      lastName: 'Simon',
      email: 'nannie.abernathy70@yahoo.com',
      phoneNumber: '365-374-4961',
      birthday: null,
      gender: 'Male',
      streetAddress: '',
      zipCode: '',
      city: '',
      country: '',
    },
  });

  const onSubmitPersonal = personalMethods.handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      personalMethods.reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const passwordMethods = useForm({
    resolver: zodResolver(AccountPasswordSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  const onSubmitPassword = passwordMethods.handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      passwordMethods.reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderPersonalForm = (
    <>
      <Field.Text name="firstName" label="First name" />
      <Field.Text name="lastName" label="Last name" />
      <Field.Text name="email" label="Email address" />
      <Field.Text name="phoneNumber" label="Phone number" />
      <Field.DatePicker name="birthday" label="Birthday" />
      <Field.Select native name="gender" label="Gender">
        {['Male', 'Female', 'Other'].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Field.Select>
      <Field.Text name="streetAddress" label="Street address" />
      <Field.Text name="zipCode" label="Zip/code" />
      <Field.Text name="city" label="City" />
      <Field.CountrySelect
        fullWidth
        name="country"
        label="Country"
        placeholder="Choose a country"
      />
    </>
  );

  const renderChangePasswordForm = (
    <>
      <Field.Text
        name="oldPassword"
        label="Old password"
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
        name="newPassword"
        label="New password"
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
        name="confirmNewPassword"
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
    </>
  );

  return (
    <>
      <div>
        <Typography component="h6" variant="h5">
          Personal
        </Typography>

        <UserPhoto
          sx={{
            p: 3,
            mt: 3,
            borderRadius: 2,
            display: { xs: 'flex', md: 'none' },
            border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
          }}
        />

        <Form methods={personalMethods} onSubmit={onSubmitPersonal}>
          <Box
            rowGap={2.5}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            sx={{ my: 3 }}
          >
            {renderPersonalForm}
          </Box>

          <Box sx={{ textAlign: 'right' }}>
            <LoadingButton
              color="inherit"
              type="submit"
              variant="contained"
              loading={personalMethods.formState.isSubmitting}
            >
              Save changes
            </LoadingButton>
          </Box>
        </Form>
      </div>

      <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

      <div>
        <Typography component="h6" variant="h5">
          Change password
        </Typography>
        <Form methods={passwordMethods} onSubmit={onSubmitPassword}>
          <Box gap={2.5} display="flex" flexDirection="column" sx={{ my: 3 }}>
            {renderChangePasswordForm}
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <LoadingButton
              color="inherit"
              type="submit"
              variant="contained"
              loading={passwordMethods.formState.isSubmitting}
            >
              Save changes
            </LoadingButton>
          </Box>
        </Form>
      </div>
    </>
  );
}
