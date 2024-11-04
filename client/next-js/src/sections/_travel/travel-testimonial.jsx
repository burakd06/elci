import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

export function TravelTestimonial({ testimonials, sx, ...other }) {
  const carousel = useCarousel();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
              What our customer say
            </Typography>

            <Carousel carousel={carousel}>
              {testimonials.map((testimonial) => (
                <TestimonialItem key={testimonial.id} testimonial={testimonial} />
              ))}
            </Carousel>
          </Grid>

          <Grid
            xs={12}
            md={6}
            sx={{
              textAlign: { md: 'right' },
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Box
              component="img"
              loading="lazy"
              alt="Travel testimonial"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-customer.svg`}
              sx={{ width: 320 }}
            />
          </Grid>
        </Grid>

        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{
            mt: 8,
            width: 1,
            color: 'primary.main',
            justifyContent: 'center',
            display: { xs: 'inline-flex', md: 'none' },
          }}
        />

        <CarouselArrowBasicButtons
          {...carousel.arrows}
          options={carousel.options}
          sx={{
            gap: 1,
            mt: 10,
            justifyContent: 'center',
            display: { xs: 'none', md: 'inline-flex' },
          }}
        />
      </Container>
    </Box>
  );
}

function TestimonialItem({ testimonial, sx, ...other }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={{ xs: 'center', md: 'flex-start' }}
      sx={{
        textAlign: { xs: 'center', md: 'left' },
        ...sx,
      }}
      {...other}
    >
      <Iconify width={48} icon="carbon:quotes" sx={{ opacity: 0.48, color: 'primary.main' }} />

      <Typography sx={{ mt: 2, mb: 5, lineHeight: 1.75, fontSize: { md: 20 } }}>
        {testimonial.content}
      </Typography>

      <Box gap={1.5} alignItems="center" display="flex" sx={{ typography: 'h6' }}>
        <Box
          component="span"
          sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }}
        />
        {testimonial.name}
      </Box>
    </Box>
  );
}
