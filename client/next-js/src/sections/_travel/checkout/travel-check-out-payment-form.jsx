import { useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { PaymentNewCardForm } from 'src/sections/payment/payment-new-card-form';

// ----------------------------------------------------------------------

export function TravelCheckOutPaymentForm({ name, options, sx, ...other }) {
  const { watch, setValue } = useFormContext();

  const values = watch();

  const { paymentMethods } = values;

  return (
    <Box gap={3} display="flex" flexDirection="column" sx={sx} {...other}>
      {options.map((option, index) => (
        <OptionItem
          key={index}
          option={option}
          selected={paymentMethods.methods === option.value}
          isCredit={option.value === 'creditcard' && paymentMethods.methods === option.value}
          onClick={() => setValue(name, option.value)}
        />
      ))}
    </Box>
  );
}

function OptionItem({ option, selected, isCredit, sx, ...other }) {
  return (
    <Box
      sx={{
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
      <Box
        display="flex"
        alignItems="center"
        sx={{ px: 2, gap: 1.5, height: 80, cursor: 'pointer' }}
      >
        <Iconify
          width={24}
          icon={selected ? 'solar:check-circle-bold' : 'carbon:radio-button'}
          sx={{
            color: 'text.disabled',
            ...(selected && { color: 'primary.main' }),
          }}
        />

        <Box gap={0.5} display="flex" flexDirection="column" flexGrow={1}>
          <Box component="span" sx={{ typography: 'subtitle1' }}>
            {option.label}
          </Box>
          <Box component="span" sx={{ typography: 'caption', color: 'text.secondary' }}>
            {option.description}
          </Box>
        </Box>

        <Box gap={1} display="flex" alignItems="center">
          {option.value === 'creditcard' ? (
            <>
              <Iconify width={24} icon="logos:mastercard" />
              <Iconify width={24} icon="logos:visa" />
            </>
          ) : (
            <Iconify width={24} icon="logos:paypal" />
          )}
        </Box>
      </Box>

      {isCredit && (
        <Box
          gap={2.5}
          display="flex"
          alignItems="flex-end"
          flexDirection="column"
          sx={{ px: 3, pb: 3 }}
        >
          <PaymentNewCardForm
            isRHF
            numberField={{ name: 'paymentMethods.card.number' }}
            holderField={{ name: 'paymentMethods.card.holder' }}
            dateField={{ name: 'paymentMethods.card.expired' }}
            cvvField={{ name: 'paymentMethods.card.ccv' }}
          />
          <Button variant="contained">Apply</Button>
        </Box>
      )}
    </Box>
  );
}
