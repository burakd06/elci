import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';

// ----------------------------------------------------------------------

export function ComponentHero({ children, sx, ...other }) {
  return (
    <Box
      sx={{
        py: 5,
        minHeight: 240,
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    >
      <Container>{children}</Container>

      <Box
        sx={(theme) => ({
          ...bgGradient({
            color: `to bottom, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}`,
            imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-1.webp`,
          }),
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: -1,
          position: 'absolute',
        })}
      />
    </Box>
  );
}
