import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import { Label } from 'src/components/label';
import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function CareerJobItem({ job }) {
  const [favorite, setFavorite] = useState(job.favorited);

  const handleChangeFavorite = useCallback((event) => {
    setFavorite(event.target.checked);
  }, []);

  return (
    <Card
      sx={{
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Checkbox
        color="error"
        checked={favorite}
        onChange={handleChangeFavorite}
        icon={<Iconify icon="solar:heart-outline" />}
        checkedIcon={<Iconify icon="solar:heart-bold" />}
        inputProps={{
          id: `favorite-checkbox-${job.id}`,
          'aria-label': 'Favorite checkbox',
        }}
        sx={{ position: 'absolute', right: 16, top: 16 }}
      />

      <Stack sx={{ p: (theme) => theme.spacing(3, 3, 2, 3) }}>
        <Box gap={2} display="flex" alignItems="center">
          <Image
            alt={job.company.name}
            src={job.company.logo}
            sx={{ width: 48, height: 48, borderRadius: 1 }}
          />

          {job.urgent && <Label color="error">Urgent</Label>}
        </Box>

        <Box sx={{ mt: 3, mb: 2 }}>
          <Link component={RouterLink} href={paths.career.job} color="inherit" variant="h6" noWrap>
            {job.slug}
          </Link>

          <Typography variant="body2" sx={{ mt: 0.5, mb: 0.75, color: 'info.main' }}>
            {job.company.name}
          </Typography>

          <Box
            gap={0.5}
            display="flex"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.secondary' }}
          >
            <Iconify width={18} icon="carbon:location" />
            {job.location}
          </Box>
        </Box>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          Posted at: {fDate(job.createdAt)}
        </Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box
        gap={1.5}
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        sx={{
          typography: 'body2',
          color: 'text.secondary',
          p: (theme) => theme.spacing(2, 3, 3, 3),
        }}
      >
        <Box component="span" gap={1} display="flex" alignItems="center">
          <Iconify icon="carbon:increase-level" />
          {`${job.experience} year exp`}
        </Box>
        <Box component="span" gap={1} display="flex" alignItems="center">
          <Iconify icon="solar:clock-circle-outline" />
          {job.type}
        </Box>
        <Box component="span" gap={1} display="flex" alignItems="center">
          <Iconify icon="solar:banknote-2-outline" />
          {typeof job.salary === 'number' ? fCurrency(job.salary) : job.salary}
        </Box>
        <Box component="span" gap={1} display="flex" alignItems="center">
          <Iconify icon="solar:user-rounded-outline" />
          {job.level}
        </Box>
      </Box>
    </Card>
  );
}
