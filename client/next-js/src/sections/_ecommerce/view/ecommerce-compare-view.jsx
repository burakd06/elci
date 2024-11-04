'use client';

import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { _productsCompare } from 'src/_mock';

import { EcommerceCompareList } from '../ecommerce-compare-list';

// ----------------------------------------------------------------------

export function EcommerceCompareView() {
  return (
    <Container sx={{ pb: 10 }}>
      <Stack spacing={2} alignItems="flex-start" sx={{ my: { xs: 3, md: 5 } }}>
        <Typography variant="h3">Compare</Typography>

        <FormControlLabel
          control={<Switch defaultChecked inputProps={{ id: 'view-mode-switch' }} />}
          label="Only view the difference"
        />
      </Stack>

      <EcommerceCompareList products={_productsCompare} />
    </Container>
  );
}
