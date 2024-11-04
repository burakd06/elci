'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { EcommerceCartList } from '../cart/ecommerce-cart-list';

// ----------------------------------------------------------------------

export function EcommerceWishlistView({ products }) {
  return (
    <Container sx={{ pb: 10 }}>
      <Typography variant="h3" sx={{ my: { xs: 3, md: 5 } }}>
        Wishlist ({products?.length})
      </Typography>

      <EcommerceCartList isWishlist products={products || []} />

      <Box
        display="flex"
        alignItems={{ sm: 'center' }}
        justifyContent={{ sm: 'space-between' }}
        flexDirection={{ xs: 'column-reverse', sm: 'row' }}
        sx={{ mt: 3 }}
      >
        <Button
          component={RouterLink}
          href={paths.eCommerce.product}
          color="inherit"
          startIcon={<Iconify icon="solar:alt-arrow-left-outline" />}
          sx={{ mt: 3 }}
        >
          Continue shopping
        </Button>

        <Stack spacing={3} sx={{ minWidth: 240 }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ typography: 'h6' }}
          >
            <Box component="span"> Subtotal</Box>
            $58.07
          </Box>

          <Button
            component={RouterLink}
            href={paths.eCommerce.cart}
            size="large"
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="solar:cart-3-outline" />}
          >
            Add to cart
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
