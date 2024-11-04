import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { EcommerceProductItemHot } from '../product/item/ecommerce-product-item-hot';
import { EcommerceProductItemCountDown } from '../product/item/ecommerce-product-item-count-down';

// ----------------------------------------------------------------------

export function EcommerceLandingFeaturedProducts({ sx, largeProducts, smallProducts, ...other }) {
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
          Featured products
        </Typography>

        <Grid container spacing={3} disableEqualOverflow>
          <Grid xs={12} lg={8}>
            <Box
              gap={3}
              display="grid"
              gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            >
              {largeProducts?.map((product, index) => (
                <EcommerceProductItemCountDown
                  key={product.id}
                  product={product}
                  sx={{
                    ...(index === 1 && {
                      color: 'secondary.darker',
                      bgcolor: 'secondary.lighter',
                      '&:hover': { bgcolor: 'secondary.light' },
                    }),
                  }}
                />
              ))}
            </Box>
          </Grid>

          <Grid xs={12} lg={4}>
            <Box
              gap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
                lg: 'repeat(2, 1fr)',
              }}
            >
              {smallProducts?.map((product) => (
                <EcommerceProductItemHot key={product.id} product={product} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
