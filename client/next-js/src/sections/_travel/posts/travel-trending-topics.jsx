import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _mock, _tags } from 'src/_mock';
import { varAlpha } from 'src/theme/styles';

import { Carousel, useCarousel, CarouselArrowBasicButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

export const TOPICS = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  totalPost: index + 10,
  category: _tags[index],
  cover: _mock.image.travel(index + 4),
}));

// ----------------------------------------------------------------------

export function TravelTrendingTopics({ sx, ...other }) {
  const carousel = useCarousel({
    slidesToShow: { xs: 1, sm: 2, md: 4 },
  });

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        bgcolor: 'background.neutral',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box display="flex" alignItems="center" sx={{ mb: { xs: 5, md: 8 } }}>
          <Typography variant="h3" sx={{ flexGrow: 1 }}>
            Trending topics
          </Typography>
          <CarouselArrowBasicButtons
            {...carousel.arrows}
            options={carousel.options}
            sx={{ gap: 1 }}
          />
        </Box>

        <Carousel carousel={carousel}>
          {TOPICS.map((topic) => (
            <Box key={topic.id} sx={{ px: 1.5 }}>
              <TopicItem topic={topic} />
            </Box>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function TopicItem({ topic, sx, ...other }) {
  const transition = (theme) =>
    theme.transitions.create(['opacity', 'transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    });

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        '& img': { transition },
        '&::before': {
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 8,
          content: "''",
          position: 'absolute',
          backgroundImage: (theme) =>
            `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${
              theme.vars.palette.common.black
            } 75%)`,
        },
        '&:hover': {
          '& img': { transform: 'scale(1.06)' },
        },
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          py: 3,
          width: 1,
          zIndex: 9,
          bottom: 0,
          textAlign: 'center',
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="h6">{topic.category}</Typography>

        <Typography variant="body2" sx={{ mt: 0.75, opacity: 0.72 }}>
          {topic.totalPost} posts
        </Typography>
      </Box>

      <Box
        component="img"
        loading="lazy"
        alt={topic.category}
        src={topic.cover}
        sx={{ aspectRatio: '4/3', objectFit: 'cover' }}
      />
    </Box>
  );
}
