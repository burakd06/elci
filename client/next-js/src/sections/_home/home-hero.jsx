import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

function AnimatedDiv({ children }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

// ----------------------------------------------------------------------

export function HomeHero({ sx, ...other }) {
  const theme = useTheme();

  const renderContent = (
    <Stack
      component={MotionViewport}
      spacing={5}
      alignItems={{ xs: 'center', md: 'flex-start' }}
      sx={{
        maxWidth: 480,
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <AnimatedDiv>
        <Typography variant="h1">
          Create your <br /> website today with
          <Box
            component="span"
            sx={{
              ...textGradient(
                `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
              ),
            }}
          >
            {` ZONE`}
          </Box>
        </Typography>
      </AnimatedDiv>

      <AnimatedDiv>
        <Typography sx={{ maxWidth: 480 }}>
          The ZONE UI is built on top of MUI, a powerful library that provides flexible,
          customizable, and easy-to-use components.
        </Typography>
      </AnimatedDiv>

      <AnimatedDiv>
        <Button
          color="inherit"
          size="large"
          variant="contained"
          endIcon={<Iconify icon="carbon:launch" />}
          target="_blank"
          rel="noopener"
          href={paths.figmaUrl}
        >
          Figma workspace
        </Button>
      </AnimatedDiv>

      <Stack spacing={3}>
        <AnimatedDiv>
          <Box
            component="span"
            gap={0.75}
            display="flex"
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            <Box component="span" sx={{ opacity: 0.48, typography: 'overline' }}>
              Available for
            </Box>
            <Box
              component="span"
              sx={{
                px: '5px',
                lineHeight: '18px',
                borderRadius: '18px',
                bgcolor: 'background.paper',
                fontWeight: 'fontWeightSemiBold',
                fontSize: theme.typography.pxToRem(11),
                border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
              }}
            >
              v{CONFIG.appVersion}
            </Box>
          </Box>
        </AnimatedDiv>

        <Box gap={2.5} display="flex">
          {['js', 'ts', 'nextjs', 'vite', 'figma'].map((platform) => (
            <AnimatedDiv key={platform}>
              {platform === 'nextjs' ? (
                <SvgColor
                  width={24}
                  src={`${CONFIG.assetsDir}/assets/icons/platforms/ic-${platform}.svg`}
                />
              ) : (
                <Box
                  component="img"
                  alt={platform}
                  src={`${CONFIG.assetsDir}/assets/icons/platforms/ic-${platform}.svg`}
                  sx={{ width: 24, height: 24 }}
                />
              )}
            </AnimatedDiv>
          ))}
        </Box>
      </Stack>
    </Stack>
  );

  const renderImage = (
    <Box
      component={MotionViewport}
      sx={{
        flex: '1 1 auto',
        position: 'relative',
        display: { xs: 'none', md: 'block' },
      }}
    >
      {[...Array(7)].map((_, index) => (
        <Box
          key={index}
          component={m.img}
          variants={varFade({ distance: 40 }).inDown}
          alt="Home hero"
          src={`${CONFIG.assetsDir}/assets/images/home/hero-${index + 1}.webp`}
          sx={{
            top: 0,
            left: 0,
            m: 'auto',
            bottom: 0,
            width: 800,
            maxWidth: 'unset',
            zIndex: 9 - index,
            position: 'absolute',
          }}
        />
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-1.webp`,
        }),
        py: 10,
        overflow: 'hidden',
        position: 'relative',
        [theme.breakpoints.up('md')]: {
          py: 15,
          minHeight: 760,
          height: '100vh',
          maxHeight: 1440,
          display: 'flex',
          alignItems: 'center',
        },
        ...sx,
      }}
      {...other}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          [theme.breakpoints.up('md')]: {
            columnGap: 10,
            alignItems: 'center',
            justifyContent: 'unset',
          },
        }}
      >
        {renderContent}
        {renderImage}
      </Container>
    </Box>
  );
}
