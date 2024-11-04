import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

import { ProductPrice } from '../../components/product-price';

// ----------------------------------------------------------------------

export function EcommerceProductItemTop({ product, variant = 'small', sx }) {
  const renderImage = <Image alt={product.name} src={product.coverUrl} ratio="1/1" />;

  const renderName = <Typography variant="h5">{product.name}</Typography>;

  const priceText = (
    <ProductPrice price={product.price} sx={{ typography: 'h5', color: 'text.disabled' }} />
  );

  const renderButton = (
    <Button
      component={RouterLink}
      href={paths.eCommerce.product}
      color="inherit"
      endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
      sx={{ flexShrink: 0 }}
    >
      More details
    </Button>
  );

  const renderLargeItem = (
    <Box gap={5} display="flex" flexDirection="column">
      {renderImage}

      <Box gap={5} display="flex" alignItems="flex-end">
        <Box display="flex" flexDirection="column" gap={1} flexGrow={1}>
          {renderName}
          {priceText}
        </Box>
        {renderButton}
      </Box>
    </Box>
  );

  const renderSmallItem = (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
      sx={{ height: 1 }}
    >
      <Box display="inline-flex" sx={{ order: { sm: 2 } }}>
        {renderImage}
      </Box>

      <Stack spacing={1}>
        {renderName}
        {priceText}

        <Stack
          flexGrow={1}
          justifyContent="flex-end"
          alignItems={{ xs: 'flex-end', sm: 'flex-start' }}
        >
          {renderButton}
        </Stack>
      </Stack>
    </Box>
  );

  return (
    <Paper
      sx={{
        p: 5,
        borderRadius: 2,
        bgcolor: 'background.neutral',
        ...sx,
      }}
    >
      {variant === 'large' ? renderLargeItem : renderSmallItem}
    </Paper>
  );
}
