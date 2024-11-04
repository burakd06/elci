import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export function TravelCheckOutShippingForm({ sx, sameBilling, onChangeSameBilling, ...other }) {
  return (
    <Box gap={5} display="flex" flexDirection="column" sx={sx} {...other}>
      <div>
        <Typography variant="overline" sx={{ color: 'text.secondary', mb: 3, display: 'block' }}>
          Billing Address
        </Typography>

        <Stack spacing={2.5}>
          <Stack spacing={{ xs: 2.5, md: 2 }} direction={{ xs: 'column', md: 'row' }}>
            <Field.Text name="billingAddress.firstName" label="First name" />
            <Field.Text name="billingAddress.lastName" label="Last name" />
          </Stack>
          <Field.Text name="billingAddress.fullAddress" label="Full address 1" />
          <Field.Text name="billingAddress.fullAddress2" label="Full address 2 (optional)" />
        </Stack>
      </div>

      <div>
        <Box gap={3} display="flex" flexWrap="wrap" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="overline" sx={{ color: 'text.secondary', flexGrow: 1 }}>
            Shipping Address
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={sameBilling}
                onClick={onChangeSameBilling}
                inputProps={{ id: 'billing-address-switch' }}
              />
            }
            label="Same as billing address"
            labelPlacement="start"
            sx={{ m: 0 }}
          />
        </Box>

        <Collapse in={!sameBilling}>
          <Stack spacing={2.5}>
            <Stack spacing={{ xs: 2.5, md: 2 }} direction={{ xs: 'column', md: 'row' }}>
              <Field.Text name="shippingAddress.firstName" label="First name" />
              <Field.Text name="shippingAddress.lastName" label="Last name" />
            </Stack>
            <Field.Text name="shippingAddress.fullAddress" label="Full address 1" />
            <Field.Text name="shippingAddress.fullAddress2" label="Full address 2 (optional)" />
          </Stack>
        </Collapse>
      </div>
    </Box>
  );
}
