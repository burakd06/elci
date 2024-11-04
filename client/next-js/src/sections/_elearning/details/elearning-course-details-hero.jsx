import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/use-boolean';

import { fShortenNumber } from 'src/utils/format-number';

import { _mock } from 'src/_mock';
import { varAlpha } from 'src/theme/styles';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { PlayerDialog } from 'src/components/player';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export function ElearningCourseDetailsHero({
  sx,
  slug,
  level,
  teachers,
  category,
  coverUrl,
  languages,
  totalHours,
  description,
  isBestSeller,
  ratingNumber,
  totalReviews,
  totalQuizzes,
  totalLessons,
  totalStudents,
  ...other
}) {
  const openVideo = useBoolean();

  const renderInfo = (
    <Stack
      spacing={1.5}
      direction="row"
      flexWrap="wrap"
      alignItems="center"
      divider={<Divider orientation="vertical" sx={{ height: 20, my: 'auto' }} />}
    >
      <Box gap={0.5} display="flex" alignItems="center">
        <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />
        <Box sx={{ typography: 'h6' }}>
          {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}
        </Box>

        {totalReviews && (
          <Link variant="body2" sx={{ color: 'text.secondary' }}>
            ({fShortenNumber(totalReviews)} reviews)
          </Link>
        )}
      </Box>

      <Box display="flex" sx={{ typography: 'subtitle2' }}>
        {fShortenNumber(totalStudents)}
        <Box component="span" typography="body2" sx={{ ml: 0.5 }}>
          students
        </Box>
      </Box>
    </Stack>
  );

  const renderTeacher = (
    <Box gap={1.5} display="flex" alignItems="center">
      <Avatar src={teachers?.[0]?.avatarUrl} />

      <Box gap={0.75} display="flex" alignItems="center" flexWrap="wrap">
        <Typography variant="body2">{teachers?.[0]?.name}</Typography>

        {Number(teachers?.length) - 1 > 0 && (
          <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
            + {Number(teachers?.length) - 1}
            <Link underline="always" color="inherit" sx={{ ml: 0.25 }}>
              teachers
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );

  const renderTexts = (
    <Stack spacing={2} alignItems="flex-start">
      {isBestSeller && (
        <Label color="warning" variant="filled" sx={{ textTransform: 'uppercase' }}>
          Best Seller
        </Label>
      )}
      <Typography variant="overline" sx={{ color: 'secondary.main' }}>
        {category}
      </Typography>
      <Typography variant="h3" component="h1">
        {slug}
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
    </Stack>
  );

  return (
    <>
      <Box
        component="section"
        sx={{
          pt: 5,
          pb: 10,
          bgcolor: 'background.neutral',
          ...sx,
        }}
        {...other}
      >
        <Container sx={{ overflow: 'hidden' }}>
          <CustomBreadcrumbs
            links={[
              { name: 'Home', href: '/' },
              { name: 'Courses', href: paths.eLearning.courses },
              { name: slug },
            ]}
            sx={{ mb: { xs: 5, md: 10 } }}
          />

          <Grid container spacing={{ xs: 5, md: 10 }} direction="row-reverse">
            <Grid xs={12} md={5}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={(theme) => ({
                  borderRadius: 2,
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  aspectRatio: { xs: '4/3', md: '3/4' },
                  backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${theme.vars.palette.common.black} 75%), url(${coverUrl})`,
                })}
              >
                <Fab
                  color="primary"
                  onClick={openVideo.onTrue}
                  sx={{ zIndex: 9, position: 'absolute' }}
                >
                  <Iconify width={24} icon="solar:play-outline" />
                </Fab>
              </Box>
            </Grid>

            <Grid xs={12} md={7}>
              <Stack spacing={3}>
                {renderTexts}
                {renderInfo}
                {renderTeacher}

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Box
                  rowGap={3}
                  columnGap={5}
                  display="flex"
                  flexWrap="wrap"
                  sx={{
                    maxWidth: 480,
                    typography: 'body2',
                    '& > div': { gap: 1, display: 'flex', alignItems: 'center' },
                  }}
                >
                  <div>
                    <Iconify icon="solar:clock-circle-outline" /> {`${totalHours} hours`}
                  </div>

                  <div>
                    <Iconify icon="solar:documents-minimalistic-outline" />
                    {totalLessons} lessons
                  </div>

                  <div>
                    <Iconify
                      icon={
                        (level === 'Beginner' && 'carbon:skill-level-basic') ||
                        (level === 'Intermediate' && 'carbon:skill-level-intermediate') ||
                        'carbon:skill-level-advanced'
                      }
                    />
                    {level}
                  </div>

                  <div>
                    <Iconify icon="carbon:translate" />
                    {typeof languages === 'string' ? languages : languages?.join(', ')}
                  </div>
                  <div>
                    <Iconify icon="solar:question-circle-outline" />
                    {`${totalQuizzes} Quizzes`}
                  </div>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <PlayerDialog open={openVideo.value} onClose={openVideo.onFalse} videoPath={_mock.video(0)} />
    </>
  );
}
