import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Rating, { ratingClasses } from '@mui/material/Rating';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export function EcommerceCompareList({ products, sx, ...other }) {
  return (
    <Stack
      direction="row"
      spacing={{ xs: 1, md: 3 }}
      divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      sx={sx}
      {...other}
    >
      {products.map((product) => (
        <EcommerceCompareItem key={product.id} product={product} />
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function EcommerceCompareItem({ product, sx, ...other }) {
  return (
    <Box
      gap={3}
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ textAlign: 'center', ...sx }}
      {...other}
    >
      <Box
        component="img"
        alt={product.name}
        src={product.coverUrl}
        sx={{
          width: 360,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack alignItems="center" spacing={1}>
        <Typography variant="subtitle2"> {product.name} </Typography>
        <Typography variant="h6"> {fCurrency(product.price)} </Typography>
        <Rating
          size="small"
          readOnly
          value={product.ratingNumber}
          precision={0.5}
          sx={{
            [`&.${ratingClasses.root}`]: {
              '& svg': {
                width: { xs: 12, md: 20 },
                height: { xs: 12, md: 20 },
              },
            },
          }}
        />
      </Stack>

      <Button
        component={RouterLink}
        href={paths.eCommerce.cart}
        fullWidth
        size="large"
        color="inherit"
        variant="contained"
        sx={{ px: 0 }}
      >
        Buy now
      </Button>

      {product.details.map((row, index) => (
        <Typography
          key={index}
          sx={{
            typography: { xs: 'caption', md: 'body2' },
          }}
        >
          {row || '-'}
        </Typography>
      ))}
    </Box>
  );
}
