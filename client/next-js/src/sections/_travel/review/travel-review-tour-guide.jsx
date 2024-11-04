import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { fShortenNumber } from 'src/utils/format-number';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function TravelReviewTourGuide({ tourGuide, sx, ...other }) {
  const renderSocials = (
    <Box display="flex" sx={{ my: 2.5 }}>
      {_socials.map((social) => (
        <IconButton key={social.value} color="inherit">
          {(social.value === 'twitter' && (
            <SvgColor
              width={20}
              src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
            />
          )) || (
            <Box
              component="img"
              alt={social.label}
              src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
              sx={{ width: 20, height: 20 }}
            />
          )}
        </IconButton>
      ))}
    </Box>
  );

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 2,
        bgcolor: 'transparent',
        ...sx,
      }}
      {...other}
    >
      <Stack alignItems="center" sx={{ textAlign: 'center', p: 5 }}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            tourGuide?.verified ? (
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  bgcolor: 'background.default',
                }}
              >
                <Iconify icon="solar:check-circle-bold" sx={{ color: 'success.main' }} />
              </Box>
            ) : null
          }
        >
          <Avatar src={tourGuide?.avatarUrl} sx={{ width: 96, height: 96 }} />
        </Badge>

        <Stack spacing={1} sx={{ my: 2 }}>
          <Typography component="span" variant="h5">
            {tourGuide?.name}
          </Typography>

          <Box gap={0.5} display="flex" alignItems="center">
            <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />
            <Box component="span" sx={{ typography: 'h6' }}>
              {Number.isInteger(tourGuide?.ratingNumber)
                ? `${tourGuide?.ratingNumber}.0`
                : tourGuide?.ratingNumber}
            </Box>
            <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
              ({tourGuide?.totalReviews ? fShortenNumber(tourGuide?.totalReviews) : 0} reviews)
            </Box>
          </Box>
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {tourGuide?.about}
        </Typography>

        {renderSocials}

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {tourGuide?.quotes}
        </Typography>

        <Button color="inherit" variant="outlined" size="large" sx={{ mt: 2 }}>
          Contact
        </Button>
      </Stack>
    </Paper>
  );
}
