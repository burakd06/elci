import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { EcommerceProductItemTop } from '../product/item/ecommerce-product-item-top';
import { EcommerceProductItemHot } from '../product/item/ecommerce-product-item-hot';

// ----------------------------------------------------------------------

export function EcommerceLandingTopProducts({ largeProducts, smallProducts, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            mb: { xs: 5, md: 8 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          Top products
        </Typography>

        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          sx={{ mb: { xs: 3, md: 8 } }}
        >
          {smallProducts.map((product) => (
            <EcommerceProductItemHot key={product.id} product={product} />
          ))}
        </Box>

        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <EcommerceProductItemTop
            variant="large"
            product={largeProducts[0]}
            sx={{ display: { xs: 'none', md: 'block' } }}
          />

          <EcommerceProductItemTop product={largeProducts[0]} sx={{ display: { md: 'none' } }} />

          <Box
            gap={3}
            display="grid"
            gridTemplateRows={{
              xs: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
          >
            <EcommerceProductItemTop product={largeProducts[1]} />
            <EcommerceProductItemTop product={largeProducts[2]} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
