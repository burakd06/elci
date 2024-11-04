import { useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function EcommerceCheckoutPaymentMethod({ name, options, sx, ...other }) {
  const { watch, setValue } = useFormContext();

  const values = watch();

  const { paymentMethods } = values;

  return (
    <Box
      rowGap={3}
      columnGap={2}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      sx={sx}
      {...other}
    >
      {options.map((option) => (
        <OptionItem
          key={option.value}
          option={option}
          selected={paymentMethods.methods === option.value}
          onClick={() => setValue(name, option.value)}
        />
      ))}
    </Box>
  );
}

function OptionItem({ option, selected, sx, ...other }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        px: 2,
        py: 2.5,
        gap: 2,
        cursor: 'pointer',
        borderRadius: 1.5,
        border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
        transition: (theme) =>
          theme.transitions.create(['box-shadow'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest,
          }),
        ...(selected && {
          boxShadow: (theme) => `0 0 0 2px ${theme.vars.palette.text.primary}`,
        }),
        ...sx,
      }}
      {...other}
    >
      <Iconify
        width={24}
        icon={selected ? 'solar:check-circle-bold' : 'carbon:radio-button'}
        sx={{
          color: 'text.disabled',
          ...(selected && { color: 'primary.main' }),
        }}
      />

      <Box flex="1 1 auto">
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ mb: 0.5, typography: 'subtitle1' }}
        >
          {option.label}
          <Iconify
            width={24}
            icon={
              (option.value === 'visa' && 'logos:visa') ||
              (option.value === 'mastercard' && 'logos:mastercard') ||
              'logos:paypal'
            }
          />
        </Box>

        <Box component="span" sx={{ typography: 'body2' }}>
          {option.description}
        </Box>
      </Box>
    </Box>
  );
}
