'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { TravelOrderCompletedInfo } from '../order-completed/travel-order-completed-info';
import { TravelOrderCompletedSummary } from '../order-completed/travel-order-completed-summary';

// ----------------------------------------------------------------------

export function TravelOrderCompletedView({ tour }) {
  return (
    <Container
      sx={{
        display: 'grid',
        pt: { xs: 3, md: 5 },
        pb: { xs: 10, md: 15 },
        gap: { xs: 5, md: 10 },
        alignItems: 'flex-start',
        gridTemplateColumns: { md: 'repeat(2, 1fr)' },
      }}
    >
      <Box
        component="img"
        alt="Travel cover"
        src={tour?.coverUrl}
        sx={{
          borderRadius: 2,
          objectFit: 'cover',
          aspectRatio: { xs: '1/1', md: '3/4' },
        }}
      />

      <Stack component="section" spacing={5}>
        <Typography component="h1" variant="h2">
          Completed 🎉
        </Typography>

        <TravelOrderCompletedInfo
          slug={tour?.slug || ''}
          tourGuide={tour?.tourGuide}
          ratingNumber={tour?.ratingNumber || 0}
          totalReviews={tour?.totalReviews || 0}
        />

        <TravelOrderCompletedSummary />

        <Box gap={2.5} display="flex" flexWrap="wrap" justifyContent="center">
          <Button
            component={RouterLink}
            href="/"
            variant="outlined"
            size="large"
            color="inherit"
            startIcon={<Iconify icon="solar:alt-arrow-left-outline" />}
          >
            Back home
          </Button>

          <Button
            variant="contained"
            size="large"
            color="inherit"
            startIcon={<Iconify icon="solar:file-download-outline" />}
          >
            Download invoice
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
