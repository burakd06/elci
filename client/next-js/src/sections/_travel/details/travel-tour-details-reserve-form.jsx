import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { fCurrency } from 'src/utils/format-number';

import { varAlpha } from 'src/theme/styles';

import { FilterTime } from '../filters/filter-time';
import { FilterGuests } from '../filters/filter-guests';

// ----------------------------------------------------------------------

export function TravelTourDetailsReserveForm({ price, priceSale }) {
  const router = useRouter();

  const [departureDay, setDepartureDay] = useState(null);

  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
  });

  const handleChangeDepartureDay = useCallback((newValue) => {
    setDepartureDay(newValue);
  }, []);

  const handleIncrementGuests = useCallback(
    (guest) => {
      if (guest === 'children') {
        setGuests({ ...guests, children: guests.children + 1 });
      } else {
        setGuests({ ...guests, adults: guests.adults + 1 });
      }
    },
    [guests]
  );

  const handleDecreaseGuests = useCallback(
    (guest) => {
      if (guest === 'children') {
        setGuests({ ...guests, children: guests.children - 1 });
      } else {
        setGuests({ ...guests, adults: guests.adults - 1 });
      }
    },
    [guests]
  );

  const handleClickReserve = useCallback(() => {
    router.push(paths.travel.checkout);
  }, [router]);

  return (
    <Card>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Box gap={1} display="flex" alignItems="center" sx={{ typography: 'h4' }}>
          {priceSale > 0 && (
            <Box sx={{ color: 'grey.500', textDecoration: 'line-through' }}>
              {fCurrency(priceSale)}
            </Box>
          )}
          {fCurrency(price)}
          <Typography variant="subtitle2" component="span" sx={{ color: 'text.disabled' }}>
            / Tour
          </Typography>
        </Box>

        <div>
          <FilterTime
            value={departureDay}
            onChange={handleChangeDepartureDay}
            sx={{
              p: 2,
              mb: 2.5,
              borderRadius: 1,
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            }}
          />

          <FilterGuests
            value={guests}
            onDecrease={handleDecreaseGuests}
            onIncrement={handleIncrementGuests}
            sx={{
              p: 2,
              borderRadius: 1,
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            }}
          />
        </div>

        <Box gap={1} display="flex" sx={{ typography: 'body2' }}>
          <Box component="span" sx={{ color: 'text.disabled', flexGrow: 1 }}>
            Service charge
          </Box>
          {fCurrency(priceSale) || '-'}
        </Box>

        <Box gap={1} display="flex" sx={{ typography: 'body2' }}>
          <Box component="span" sx={{ color: 'text.disabled', flexGrow: 1 }}>
            Discount
          </Box>
          -
        </Box>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Box gap={1} display="flex" sx={{ typography: 'h5' }}>
          <Box component="span" flexGrow={1}>
            Total
          </Box>
          {fCurrency(price)}
        </Box>

        <Button size="large" variant="contained" color="inherit" onClick={handleClickReserve}>
          Reserve
        </Button>
      </Stack>
    </Card>
  );
}
