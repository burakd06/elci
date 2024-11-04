import Box from '@mui/material/Box';

import { Lightbox, useLightBox } from 'src/components/lightbox';

// ----------------------------------------------------------------------

export function TravelTourDetailsGallery({ images, sx, ...other }) {
  const slides = images.map((slide) => ({
    src: slide,
  }));

  const lightbox = useLightBox(slides);

  return (
    <>
      <Box
        component="section"
        gap={1}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        sx={{
          pb: { xs: 5, md: 10 },
          ...sx,
        }}
        {...other}
      >
        <PhotoItem photoUrl={slides[0].src} onOpenLightbox={() => lightbox.onOpen(slides[0].src)} />

        <Box
          sx={{
            gap: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {slides.slice(1, 5).map((slide) => (
            <PhotoItem
              key={slide.src}
              photoUrl={slide.src}
              onOpenLightbox={() => lightbox.onOpen(slide.src)}
            />
          ))}
        </Box>
      </Box>

      <Lightbox
        index={lightbox.selected}
        slides={slides}
        open={lightbox.open}
        close={lightbox.onClose}
      />
    </>
  );
}

function PhotoItem({ photoUrl, onOpenLightbox }) {
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
        '& img': { transition },
        '&:hover': {
          '& img': { opacity: 0.8, transform: 'scale(1.06)' },
        },
      }}
    >
      <Box
        component="img"
        alt={photoUrl}
        src={photoUrl}
        onClick={onOpenLightbox}
        sx={{
          width: 1,
          cursor: 'pointer',
          aspectRatio: '1/1',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
}
