import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function TravelOrderCompletedInfo({
  sx,
  slug,
  ratingNumber,
  totalReviews,
  tourGuide,
  ...other
}) {
  return (
    <Box gap={2} display="flex" flexWrap="wrap" sx={sx} {...other}>
      <Box flexGrow={1}>
        <Typography component="h6" variant="h5" sx={{ mb: 1 }}>
          {slug}
        </Typography>

        <Box gap={0.5} display="flex" alignItems="center" sx={{ typography: 'h6' }}>
          <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />

          {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}

          {totalReviews && (
            <Link variant="body2" sx={{ color: 'text.secondary' }}>
              ({fShortenNumber(totalReviews)} reviews)
            </Link>
          )}
        </Box>
      </Box>

      <Box gap={1.5} display="flex" alignItems="center">
        <Avatar src={tourGuide?.avatarUrl} />
        <div>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Guide by
          </Typography>
          <Typography variant="subtitle2">{tourGuide?.name}</Typography>
        </div>
      </Box>
    </Box>
  );
}
