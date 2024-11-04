import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export function CareerJobDetailsHero({
  sx,
  slug,
  category,
  location,
  deadline,
  favorited,
  totalViews,
  ...other
}) {
  const theme = useTheme();

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = useCallback((event) => {
    setFavorite(event.target.checked);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-2.webp`,
        }),
        pt: 5,
        pb: 10,
        ...sx,
      }}
      {...other}
    >
      <Container>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Jobs', href: paths.career.jobs },
            { name: slug },
          ]}
          sx={{
            mb: { xs: 5, md: 10 },
            '& a': { color: 'common.white' },
          }}
        />

        <Stack
          spacing={5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Stack spacing={{ xs: 3, md: 2 }} sx={{ color: 'common.white' }}>
            <Typography variant="h3" component="h1">
              {slug}
            </Typography>

            <Box gap={3} display="flex" flexWrap="wrap" sx={{ opacity: 0.48, typography: 'body2' }}>
              <Box gap={1} display="flex" alignItems="center">
                <Iconify icon="carbon:baggage-claim" />
                <Link color="inherit" underline="always">
                  {category}
                </Link>
              </Box>
              <Box gap={1} display="flex" alignItems="center">
                <Iconify icon="solar:eye-outline" /> {`${totalViews} views`}
              </Box>
              <Box gap={1} display="flex" alignItems="center">
                <Iconify icon="carbon:location" /> {location}
              </Box>
            </Box>
          </Stack>

          <Box gap={2} display="flex" alignItems="flex-start" sx={{ width: 1, maxWidth: 340 }}>
            <Stack spacing={2} alignItems="center" sx={{ width: 1 }}>
              <Button fullWidth variant="contained" size="large" color="primary">
                Apply now
              </Button>

              <Typography variant="body2" sx={{ color: 'common.white' }}>
                {`Expiration date: `}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {fDate(deadline)}
                </Box>
              </Typography>
            </Stack>

            <Checkbox
              color="error"
              checked={favorite}
              onChange={handleChangeFavorite}
              icon={<Iconify width={24} icon="solar:heart-outline" />}
              checkedIcon={<Iconify width={24} icon="solar:heart-bold" />}
              inputProps={{
                id: 'favorite-checkbox',
                'aria-label': 'Favorite checkbox',
              }}
              sx={{ mt: 0.75 }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
