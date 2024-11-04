import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { fPercent, fCurrency } from 'src/utils/format-number';

import { varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function EcommerceCheckoutOrderSummary({
  sx,
  tax,
  total,
  subtotal,
  shipping,
  discount,
  products,
  loading,
  ...other
}) {
  return (
    <Box
      gap={3}
      display="flex"
      flexDirection="column"
      sx={{
        p: 4,
        borderRadius: 2,
        border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h6"> Order summary </Typography>

      {!!products?.length && (
        <>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />
        </>
      )}

      <Stack spacing={2}>
        <Row label="Subtotal" value={fCurrency(subtotal)} />

        <Row label="Shipping" value={fCurrency(shipping)} />

        <Row label="Discount (15%)" value={`-${fCurrency(discount)}`} />

        <Row label="Tax" value={fPercent(tax)} />
      </Stack>

      <TextField
        hiddenLabel
        placeholder="Discount code"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button>Apply</Button>
            </InputAdornment>
          ),
        }}
      />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Row
        label="Total"
        value={fCurrency(total)}
        sx={{
          typography: 'h6',
          '& span': { typography: 'h6' },
        }}
      />

      <LoadingButton
        size="large"
        variant="contained"
        color="inherit"
        type="submit"
        loading={loading}
      >
        Order now
      </LoadingButton>
    </Box>
  );
}

// ----------------------------------------------------------------------

function ProductItem({ product, sx, ...other }) {
  return (
    <Box display="flex" alignItems="flex-start" sx={sx} {...other}>
      <Image
        src={product.coverUrl}
        sx={{
          mr: 2,
          width: 64,
          height: 64,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack flexGrow={1} sx={{ minWidth: 0 }}>
        <Typography variant="body2" noWrap sx={{ fontWeight: 'fontWeightMedium' }}>
          {product.name}
        </Typography>

        <Typography variant="subtitle2" sx={{ mt: 0.5, mb: 1.5 }}>
          {fCurrency(product.price)}
        </Typography>

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

      <IconButton aria-label="Delete">
        <Iconify icon="solar:trash-bin-minimalistic-outline" />
      </IconButton>
    </Box>
  );
}

// ----------------------------------------------------------------------

function Row({ label, value, sx, ...other }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ typography: 'subtitle2', ...sx }}
      {...other}
    >
      <Box component="span" sx={{ typography: 'body2' }}>
        {label}
      </Box>
      {value}
    </Box>
  );
}
