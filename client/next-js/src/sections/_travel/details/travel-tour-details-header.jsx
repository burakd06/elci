import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { usePopover } from 'src/hooks/use-popover';

import { fShortenNumber } from 'src/utils/format-number';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function TravelTourDetailsHeader({
  slug,
  favorited,
  tourGuide,
  ratingNumber,
  totalReviews,
}) {
  const openSocial = usePopover();

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = useCallback((event) => {
    setFavorite(event.target.checked);
  }, []);

  return (
    <>
      <Box gap={3} display="flex" flexWrap="wrap" sx={{ mb: 3 }}>
        <Typography variant="h3" component="h1" sx={{ flexGrow: 1, pr: { md: 10 } }}>
          {slug}
        </Typography>

        <Box display="flex" alignItems="center" flexShrink={0}>
          <IconButton onClick={openSocial.onOpen} color={openSocial.open ? 'primary' : 'default'}>
            <Iconify icon="solar:share-outline" />
          </IconButton>

          <Checkbox
            color="error"
            checked={favorite}
            onChange={handleChangeFavorite}
            icon={<Iconify icon="solar:heart-outline" />}
            checkedIcon={<Iconify icon="solar:heart-bold" />}
            inputProps={{ id: 'favorite-checkbox', 'aria-label': 'Favorite checkbox' }}
          />
        </Box>
      </Box>

      <Box gap={3} display="flex" flexWrap="wrap">
        <Box gap={0.5} display="flex" alignItems="center" sx={{ typography: 'h6' }}>
          <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />

          {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}

          <Link variant="body2" sx={{ color: 'text.secondary' }}>
            ({fShortenNumber(totalReviews)} reviews)
          </Link>
        </Box>

        <Box gap={0.5} display="flex" alignItems="center">
          <Avatar src={tourGuide?.avatarUrl} sx={{ width: 24, height: 24 }} />

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Guide by
          </Typography>

          <Link variant="subtitle2" color="inherit">
            {tourGuide?.name}
          </Link>
        </Box>
      </Box>

      <Popover
        open={openSocial.open}
        anchorEl={openSocial.anchorEl}
        onClose={openSocial.onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: { width: 220 },
          },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={() => openSocial.onClose()} sx={{ gap: 1 }}>
            {(social.value === 'twitter' && (
              <SvgColor
                width={20}
                src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
              />
            )) || (
              <Box
                component="img"
                loading="lazy"
                alt={social.label}
                src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
                sx={{ width: 20, height: 20 }}
              />
            )}
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
