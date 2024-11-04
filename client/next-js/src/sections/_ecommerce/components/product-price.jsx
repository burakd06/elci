import Box from '@mui/material/Box';

import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export function ProductPrice({ price, priceSale = 0, sx, ...other }) {
  return (
    <Box
      gap={0.5}
      component="span"
      display="flex"
      sx={{ typography: 'subtitle2', ...sx }}
      {...other}
    >
      {fCurrency(price)}

      {priceSale > 0 && (
        <Box
          component="span"
          sx={{
            color: 'text.disabled',
            textDecoration: 'line-through',
            fontWeight: 'fontWeightMedium',
          }}
        >
          {fCurrency(priceSale)}
        </Box>
      )}
    </Box>
  );
}
