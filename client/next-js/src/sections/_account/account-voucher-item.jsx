import dayjs from 'dayjs';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function AccountVoucherItem({ voucher, sx, ...other }) {
  const dayLeft = dayjs(voucher.dueOn).diff(new Date(), 'days');

  return (
    <Box
      display="flex"
      sx={{
        minHeight: 120,
        borderRadius: 1,
        overflow: 'hidden',
        border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
        ...sx,
      }}
      {...other}
    >
      <Box
        gap={1}
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        sx={(theme) => ({
          px: 2,
          width: 120,
          flexShrink: 0,
          textAlign: 'center',
          typography: 'overline',
          borderRight: `dashed 1px ${theme.vars.palette.divider}`,
        })}
      >
        {getIcon(voucher.type)}

        {voucher.label}
      </Box>

      <Stack sx={{ p: 2.5 }}>
        <Typography variant="h6">{voucher.title}</Typography>
        <Typography variant="body2" sx={{ mt: 0.5, mb: 1 }}>
          {voucher.description}
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          sx={{
            typography: 'caption',
            color: 'text.secondary',
            ...(dayLeft === 0 && { color: 'error.main' }),
            ...(dayLeft === 1 && { color: 'warning.main' }),
          }}
        >
          <Iconify width={16} icon="solar:clock-circle-outline" sx={{ mr: 1 }} />

          {(dayLeft === 0 && `Expired`) ||
            (dayLeft === 1 && `${dayLeft} day left`) ||
            `Valid till: ${fDate(voucher.dueOn)}`}
        </Box>
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------

function getIcon(type) {
  let icon;

  switch (type) {
    case 'shipping':
      icon = <Iconify width={32} icon="carbon:delivery" />;
      break;
    case 'category':
      icon = <Iconify width={32} icon="carbon:cut-out" />;
      break;
    default:
      icon = <Iconify width={32} icon="eva:star-outline" />;
  }
  return icon;
}
