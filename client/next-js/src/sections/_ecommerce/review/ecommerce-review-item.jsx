import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { svgIconClasses } from '@mui/material/SvgIcon';

import { fDate } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function EcommerceReviewItem({ name, rating, message, createdAt, avatarUrl, sx }) {
  return (
    <Box
      display="flex"
      sx={{
        py: 4,
        borderBottom: (theme) => `solid 1px ${theme.vars.palette.divider}`,
        ...sx,
      }}
    >
      <Avatar alt={name} src={avatarUrl} sx={{ width: 64, height: 64, mr: 2.5 }} />

      <Stack spacing={1}>
        <Rating
          size="small"
          value={rating}
          precision={0.5}
          readOnly
          sx={{ [`& .${svgIconClasses.root}`]: { color: 'text.primary' } }}
        />

        <Typography variant="subtitle1">{name}</Typography>

        {createdAt && (
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            {fDate(createdAt)}
          </Typography>
        )}

        <Typography variant="body2">{message}</Typography>

        <Box gap={1.5} display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="subtitle2">Was this review helpful?</Typography>

          <ButtonBase disableRipple sx={{ gap: 0.5, fontWeight: 'fontWeightSemiBold' }}>
            <Iconify width={18} icon="solar:like-outline" /> Yes
          </ButtonBase>

          <ButtonBase disableRipple sx={{ gap: 0.5, fontWeight: 'fontWeightSemiBold' }}>
            <Iconify width={18} icon="solar:like-outline" sx={{ transform: 'scale(-1, -1)' }} />
            No
          </ButtonBase>
        </Box>
      </Stack>
    </Box>
  );
}
