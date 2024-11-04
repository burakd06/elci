import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { fCurrency } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function EcommerceCartItem({ product, isWishlist }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        py: 3,
        minWidth: 720,
        borderBottom: (theme) => `solid 1px ${theme.vars.palette.divider}`,
      }}
    >
      <Box display="flex" alignItems="center" flexGrow={1}>
        <Box
          component="img"
          src={product.coverUrl}
          sx={{
            width: 80,
            height: 80,
            flexShrink: 0,
            borderRadius: 1.5,
            aspectRatio: '1/1',
            objectFit: 'cover',
            bgcolor: 'background.neutral',
          }}
        />

        <Stack spacing={0.5} sx={{ p: 2 }}>
          <Typography variant="subtitle2">{product.name}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Color: Grey Space
          </Typography>
        </Stack>
      </Box>

      <Stack sx={{ width: 120 }}>
        <TextField
          select
          size="small"
          variant="outlined"
          SelectProps={{
            native: true,
          }}
          sx={{ width: 80 }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>
      </Stack>

      <Stack sx={{ width: 120, typography: 'subtitle2' }}> {fCurrency(product.price)} </Stack>

      <IconButton aria-label="Delete">
        <Iconify icon="solar:trash-bin-minimalistic-outline" />
      </IconButton>

      {isWishlist && (
        <IconButton aria-label="Add">
          <Iconify icon="solar:cart-plus-outline" />
        </IconButton>
      )}
    </Box>
  );
}
