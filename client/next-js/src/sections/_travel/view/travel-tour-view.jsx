'use client';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/use-boolean';

import { CONFIG } from 'src/config-global';
import { _socials, _reviews } from 'src/_mock';

import { SvgColor } from 'src/components/svg-color';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { TravelNewsletter } from '../travel-newsletter';
import { ReviewNewForm } from '../../review/review-new-form';
import { TravelReviewList } from '../review/travel-review-list';
import { TravelReviewToolbar } from '../review/travel-review-toolbar';
import { TravelTourListSimilar } from '../list/travel-tour-list-similar';
import { TravelReviewTourGuide } from '../review/travel-review-tour-guide';
import { TravelTourDetailsHeader } from '../details/travel-tour-details-header';
import { TravelTourDetailsSummary } from '../details/travel-tour-details-summary';
import { TravelTourDetailsGallery } from '../details/travel-tour-details-gallery';
import { TravelTourDetailsReserveForm } from '../details/travel-tour-details-reserve-form';

// ----------------------------------------------------------------------

export function TravelTourView({ tour, relatedTours }) {
  const [sort, setSort] = useState('latest');

  const openReviewForm = useBoolean();

  const handleChangeSort = useCallback((event) => {
    setSort(event.target.value);
  }, []);

  const renderSocials = (
    <Box gap={1.5} display="flex" sx={{ mt: 5 }}>
      <Box component="span" sx={{ lineHeight: '30px', typography: 'subtitle2' }}>
        Share:
      </Box>
      <Box gap={1} display="flex" alignItems="center" flexWrap="wrap">
        {_socials.map((social) => (
          <Button
            key={social.value}
            size="small"
            variant="outlined"
            startIcon={
              (social.value === 'twitter' && (
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
              )
            }
          >
            {social.label}
          </Button>
        ))}
      </Box>
    </Box>
  );

  const renderReview = (
    <>
      <Container>
        <Grid container disableEqualOverflow spacing={8}>
          <Grid xs={12} md={5} lg={4}>
            <TravelReviewTourGuide tourGuide={tour?.tourGuide} />
          </Grid>

          <Grid xs={12} md={7} lg={8}>
            <TravelReviewToolbar
              sort={sort}
              totalReviews={_reviews.length}
              onChangeSort={handleChangeSort}
              onOpenReview={openReviewForm.onToggle}
            />

            <TravelReviewList reviews={_reviews} />
          </Grid>
        </Grid>
      </Container>

      <ReviewNewForm open={openReviewForm.value} onClose={openReviewForm.onFalse} />
    </>
  );

  return (
    <>
      <Container>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Tours', href: paths.travel.tours },
            { name: tour?.slug },
          ]}
          sx={{
            mt: 3,
            mb: { xs: 3, md: 5 },
          }}
        />

        <TravelTourDetailsGallery images={tour?.gallery || []} />

        <Grid container disableEqualOverflow spacing={{ xs: 5, md: 8 }} direction="row-reverse">
          <Grid xs={12} md={5} lg={4}>
            <TravelTourDetailsReserveForm
              price={tour?.price || 0}
              priceSale={tour?.priceSale || 0}
            />
          </Grid>

          <Grid xs={12} md={7} lg={8}>
            <TravelTourDetailsHeader
              slug={tour?.slug || ''}
              tourGuide={tour?.tourGuide}
              favorited={tour?.favorited || false}
              ratingNumber={tour?.ratingNumber || 0}
              totalReviews={tour?.totalReviews || 0}
            />

            <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

            <TravelTourDetailsSummary
              tourGuide={tour?.tourGuide}
              program={tour?.program || []}
              location={tour?.location || ''}
              duration={tour?.duration || ''}
              services={tour?.services || []}
              languages={tour?.languages || []}
              highlights={tour?.highlights || []}
              description={tour?.description || ''}
              available={tour?.available || { start: '', end: '' }}
            />

            {renderSocials}
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 10 }} />

      {renderReview}

      {!!relatedTours?.length && <TravelTourListSimilar tours={relatedTours} />}

      <TravelNewsletter />
    </>
  );
}
