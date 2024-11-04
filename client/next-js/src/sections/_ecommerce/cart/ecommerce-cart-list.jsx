import Box from '@mui/material/Box';

import { varAlpha } from 'src/theme/styles';

import { EcommerceCartItem } from './ecommerce-cart-item';

// ----------------------------------------------------------------------

export function EcommerceCartList({ products, isWishlist = false, sx, ...other }) {
  return (
    <Box
      sx={{
        overflowY: 'hidden',
        scrollbarWidth: 'thin',
        scrollbarColor: (theme) =>
          `${varAlpha(theme.vars.palette.text.disabledChannel, 0.4)} ${varAlpha(theme.vars.palette.text.disabledChannel, 0.08)}`,
        ...sx,
      }}
      {...other}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{
          py: 2,
          minWidth: 720,
          typography: 'subtitle2',
          borderBottom: (theme) => `solid 1px ${theme.vars.palette.divider}`,
        }}
      >
        <Box flexGrow={1}>Items</Box>
        <Box sx={{ width: 120 }}>Qty</Box>
        <Box sx={{ width: 120 }}>Subtotal</Box>
        <Box sx={{ width: 36 }} />
        {isWishlist && <Box sx={{ width: 36 }} />}
      </Box>

      {products.map((product) => (
        <EcommerceCartItem key={product.id} product={product} isWishlist={isWishlist} />
      ))}
    </Box>
  );
}
