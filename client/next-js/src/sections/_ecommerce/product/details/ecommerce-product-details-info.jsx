import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { inputBaseClasses } from '@mui/material/InputBase';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

import { ProductPrice } from '../../components/product-price';
import { ProductOptionPicker } from '../../components/product-option-picker';

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  { label: '#FA541C', value: 'red' },
  { label: '#754FFE', value: 'violet' },
  { label: '#00B8D9', value: 'cyan' },
  { label: '#36B37E', value: 'green' },
];

const MEMORY_OPTIONS = [
  { label: '128GB', value: '128gb' },
  { label: '256GB', value: '256gb' },
  { label: '512GB', value: '512gb' },
  { label: '1TB', value: '1tb' },
];

// ----------------------------------------------------------------------

export function EcommerceProductDetailsInfo({
  sx,
  name,
  price,
  caption,
  priceSale,
  ratingNumber,
  totalReviews,
  ...other
}) {
  const [color, setColor] = useState('red');
  const [memory, setMemory] = useState('128gb');
  const [quantity, setQuantity] = useState('1');

  return (
    <Box sx={sx} {...other}>
      <Label color="success" sx={{ mb: 3 }}>
        In Stock
      </Label>

      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography variant="h4"> {name} </Typography>

        <Stack spacing={0.5} direction="row" alignItems="center">
          <Rating size="small" value={ratingNumber} readOnly precision={0.5} />

          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            ({totalReviews} reviews)
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <ProductPrice price={price} priceSale={priceSale} sx={{ typography: 'h5' }} />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {caption}
        </Typography>
      </Stack>

      <ProductOptionPicker
        color={color}
        memory={memory}
        onSelectColor={(newValue) => setColor(newValue)}
        onSelectMemory={(newValue) => setMemory(newValue)}
        options={{
          colors: COLOR_OPTIONS,
          memory: MEMORY_OPTIONS,
        }}
        sx={{ my: 5 }}
      />

      <Box
        gap={2}
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ md: 'center' }}
      >
        <TextField
          select
          hiddenLabel
          SelectProps={{ native: true }}
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          sx={{
            minWidth: 100,
            [`& .${inputBaseClasses.input}`]: { py: 0, height: 48 },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>

        <Box gap={2} display="flex">
          <Button
            component={RouterLink}
            href={paths.eCommerce.cart}
            size="large"
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="solar:cart-3-outline" />}
            sx={{ width: { xs: 1, sm: 'auto' } }}
          >
            Add to cart
          </Button>

          <Button
            component={RouterLink}
            href={paths.eCommerce.cart}
            size="large"
            color="primary"
            variant="contained"
            sx={{ width: { xs: 1, sm: 'auto' } }}
          >
            Buy now
          </Button>
        </Box>
      </Box>

      <Divider sx={{ borderStyle: 'dashed', my: 3 }} />

      <Box gap={3} display="flex" sx={{ typography: 'subtitle2' }}>
        <Box gap={1} display="flex" alignItems="center">
          <Iconify icon="eva:plus-outline" /> Compare
        </Box>

        <Box gap={1} display="flex" alignItems="center">
          <Iconify icon="solar:heart-outline" /> Wishlist
        </Box>

        <Box gap={1} display="flex" alignItems="center">
          <Iconify icon="solar:share-outline" /> Share
        </Box>
      </Box>
    </Box>
  );
}
