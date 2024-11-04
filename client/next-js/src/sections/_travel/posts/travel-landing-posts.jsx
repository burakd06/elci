import { Fragment } from 'react';
import Fade from 'embla-carousel-fade';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { maxLine, varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowFloatButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

export function TravelLandingPosts({ posts, carouselPosts, sx, ...other }) {
  const carousel = useCarousel(
    {
      loop: true,
      duration: 40,
    },
    [Fade()]
  );

  return (
    <Box component="section" sx={{ bgcolor: 'common.black', ...sx }} {...other}>
      <Typography
        variant="h2"
        sx={{
          mb: 5,
          mt: 10,
          textAlign: 'center',
          color: 'common.white',
          display: { md: 'none' },
        }}
      >
        Latest posts
      </Typography>

      <Box
        display="grid"
        gap={{ xs: 5, md: 0 }}
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      >
        <Box sx={{ position: 'relative' }}>
          <CarouselArrowFloatButtons
            {...carousel.arrows}
            options={carousel.options}
            slotProps={{
              prevBtn: { sx: { left: 12 } },
              nextBtn: { sx: { right: 12 } },
            }}
            sx={{ bgcolor: 'transparent', borderRadius: '50%' }}
          />

          <Carousel carousel={carousel}>
            {carouselPosts.map((post) => (
              <PostItemCarousel key={post.id} post={post} />
            ))}
          </Carousel>

          <CarouselDotButtons
            scrollSnaps={carousel.dots.scrollSnaps}
            selectedIndex={carousel.dots.selectedIndex}
            onClickDot={carousel.dots.onClickDot}
            sx={{
              left: '50%',
              position: 'absolute',
              color: 'primary.main',
              bottom: { xs: 64, md: 80 },
              transform: 'translateX(-50%)',
            }}
          />
        </Box>

        <Box sx={{ px: { xs: 2.5, sm: 5, md: 8, lg: 15 } }}>
          <Typography
            variant="h2"
            sx={{
              my: 10,
              color: 'common.white',
              display: { xs: 'none', md: 'block' },
            }}
          >
            Latest posts
          </Typography>

          <Stack spacing={3}>
            {posts.map((post) => (
              <Fragment key={post.id}>
                <PostItem post={post} />
                <Divider sx={{ borderStyle: 'dashed' }} />
              </Fragment>
            ))}
          </Stack>

          <Box
            sx={{
              mt: 5,
              mb: 10,
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            <Button
              color="primary"
              component={RouterLink}
              href={paths.travel.posts}
              endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
            >
              View all
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function PostItem({ post, sx, ...other }) {
  return (
    <Box display="flex" flexDirection="column" sx={sx} {...other}>
      <Typography variant="caption" sx={{ color: 'primary.main' }}>
        {fDate(post.createdAt)}
      </Typography>

      <Link
        component={RouterLink}
        href={paths.travel.post}
        variant="h5"
        sx={{ mt: 1, mb: 2, color: 'common.white' }}
      >
        {post.title}
      </Link>

      <Typography
        variant="body2"
        sx={(theme) => ({
          ...maxLine({ line: 2, persistent: theme.typography.body2 }),
          color: 'text.secondary',
        })}
      >
        {post.description}
      </Typography>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function PostItemCarousel({ post, sx, ...other }) {
  return (
    <Box sx={{ position: 'relative', ...sx }} {...other}>
      <Stack
        sx={{
          width: 1,
          height: 1,
          zIndex: 9,
          display: 'flex',
          textAlign: 'center',
          position: 'absolute',
          alignItems: 'center',
          color: 'common.white',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ mx: 'auto', maxWidth: 400 }}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            {fDate(post.createdAt)}
          </Typography>

          <Typography variant="h3" sx={{ mt: 1, mb: 5 }}>
            {post.title}
          </Typography>

          <Typography sx={{ opacity: 0.72, mb: 10 }}>{post.description}</Typography>

          <Fab component={RouterLink} href={paths.travel.post}>
            <Iconify icon="solar:alt-arrow-right-outline" />
          </Fab>
        </Box>
      </Stack>

      <Image
        alt={post.title}
        src={post.coverUrl}
        slotProps={{
          overlay: {
            backgroundImage: (theme) =>
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${
                theme.vars.palette.common.black
              } 75%)`,
          },
        }}
        sx={{
          width: 1,
          height: { xs: 720, md: 960 },
        }}
      />
    </Box>
  );
}
