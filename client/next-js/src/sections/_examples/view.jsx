'use client';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { orderBy } from 'src/utils/helper';

import { ComponentHero } from './component-hero';

// ----------------------------------------------------------------------

const ITEMS = [
  { name: 'Animate', path: '/components/animate' },
  { name: 'Carousel', path: '/components/carousel' },
  { name: 'Utilities', path: '/components/utilities' },
  { name: 'Form validation', path: '/components/form-validation' },
  { name: 'Form wizard', path: '/components/form-wizard' },
  { name: 'Icons', path: '/components/icons' },
  { name: 'Image', path: '/components/image' },
  { name: 'Label', path: '/components/label' },
  { name: 'Lightbox', path: '/components/lightbox' },
  { name: 'Markdown', path: '/components/markdown' },
  { name: 'Mega menu', path: '/components/mega-menu' },
  { name: 'Navigation bar', path: '/components/navigation-bar' },
  { name: 'Scrollbar', path: '/components/scroll' },
  { name: 'Scroll progress', path: '/components/scroll-progress' },
  { name: 'Player', path: '/components/player' },
];

// ----------------------------------------------------------------------

export function ComponentsView() {
  return (
    <>
      <ComponentHero sx={{ py: 15, textAlign: 'center' }}>
        <Typography variant="h3" component="h1">
          Components
        </Typography>

        <Typography sx={{ color: 'text.secondary', mt: 3 }}>
          With huge resource pack making deployment easy and expanding more effectively
        </Typography>
      </ComponentHero>

      <Container sx={{ my: 10 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          MUI components
        </Typography>

        <Link href="https://mui.com/components/" target="_blank" rel="noopener">
          https://mui.com/components/
        </Link>

        <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>
          Extra components
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 5 }}>
          Some custom components / use 3rd party dependencies.
        </Typography>

        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {orderBy(ITEMS, ['name'], ['asc']).map((item) => (
            <Link
              component={RouterLink}
              href={item.path}
              key={item.name}
              color="inherit"
              underline="none"
            >
              <Paper
                variant="outlined"
                sx={{
                  px: 3,
                  py: 5,
                  borderRadius: 1.5,
                  textAlign: 'center',
                  bgcolor: 'transparent',
                  typography: 'subtitle2',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                {item.name}
              </Paper>
            </Link>
          ))}
        </Box>
      </Container>
    </>
  );
}
