'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { CONFIG } from 'src/config-global';
import { _mock, _socials } from 'src/_mock';

import { SvgColor } from 'src/components/svg-color';

import { Advertisement } from '../../advertisement';
import { CareerNewsletter } from '../career-newsletter';
import { CareerJobListSimilar } from '../list/career-job-list-similar';
import { CareerJobDetailsInfo } from '../details/career-job-details-info';
import { CareerJobDetailsHero } from '../details/career-job-details-hero';
import { CareerJobDetailsSummary } from '../details/career-job-details-summary';
import { CareerJobDetailsCompanyInfo } from '../details/career-job-details-company-info';
import { CareerJobDetailsCompanySimilar } from '../details/career-job-details-company-similar';

// ----------------------------------------------------------------------

export function CareerJobView({ job, relatedJobs, jobsFromCompany }) {
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

  return (
    <>
      <CareerJobDetailsHero
        slug={job?.slug || ''}
        category={job?.category || ''}
        location={job?.location || ''}
        deadline={job?.deadline || ''}
        favorited={job?.favorited || false}
        totalViews={job?.totalViews || 0}
      />

      <Container
        sx={{
          pb: 10,
          mt: { xs: 5, md: 10 },
        }}
      >
        <Grid container disableEqualOverflow spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={7} lg={8}>
            <CareerJobDetailsSummary
              content={job?.content || ''}
              skills={job?.skills || []}
              benefits={job?.benefits || []}
              locationMap={job?.locationMap || []}
            />

            <Divider sx={{ my: 5 }} />

            {renderSocials}
          </Grid>

          <Grid xs={12} md={5} lg={4} sx={{ gap: 5, display: 'flex', flexDirection: 'column' }}>
            <CareerJobDetailsInfo
              level={job?.level || ''}
              deadline={job?.deadline || ''}
              createdAt={job?.createdAt || ''}
              languages={job?.languages || []}
              experience={job?.experience || ''}
            />

            <CareerJobDetailsCompanyInfo company={job?.company} />

            {!!jobsFromCompany?.length && <CareerJobDetailsCompanySimilar jobs={jobsFromCompany} />}

            <Advertisement
              title="Advertisement"
              description="Duis leo. Donec orci lectus, aliquam ut, faucibus non"
              imageUrl={_mock.image.career(2)}
              action={
                <Button variant="contained" color="primary">
                  Go now
                </Button>
              }
            />
          </Grid>
        </Grid>
      </Container>

      {!!relatedJobs?.length && <CareerJobListSimilar jobs={relatedJobs} />}

      <CareerNewsletter />
    </>
  );
}
