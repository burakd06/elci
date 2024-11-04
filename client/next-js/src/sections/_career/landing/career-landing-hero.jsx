import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';

import { useSetState } from 'src/hooks/use-set-state';

import { fShortenNumber } from 'src/utils/format-number';

import { CONFIG } from 'src/config-global';
import { _brands, _jobTitles } from 'src/_mock';
import { varAlpha, bgGradient, textGradient } from 'src/theme/styles';
import CareerHeroIllustration from 'src/assets/illustrations/career-hero-illustration';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { CountrySelect } from 'src/components/country-select';

// ----------------------------------------------------------------------

export function CareerLandingHero({ sx, ...other }) {
  const theme = useTheme();

  const filters = useSetState({
    keyword: null,
    location: null,
  });

  const renderFilters = (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={{ xs: 'column', md: 'row' }}
      sx={{
        width: 1,
        maxWidth: 560,
        borderRadius: 1.25,
        p: { xs: 1, md: 0 },
        bgcolor: 'common.white',
        [`& .${inputBaseClasses.root}`]: {
          bgcolor: 'transparent',
          '&:hover': { bgcolor: 'transparent' },
          [`&.${inputBaseClasses.focused}`]: {
            bgcolor: 'transparent',
          },
        },
      }}
    >
      <Autocomplete
        sx={{ width: 1 }}
        options={_jobTitles}
        value={filters.state.keyword}
        onChange={(event, newValue) => filters.setState({ keyword: newValue })}
        renderInput={(params) => (
          <TextField
            {...params}
            hiddenLabel
            placeholder="Job title, keywords..."
            InputProps={{
              ...params.InputProps,
              autoComplete: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="carbon:search" sx={{ color: 'text.disabled', ml: 0.5 }} />
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Divider
        orientation="vertical"
        sx={{ my: 'auto', height: 24, display: { xs: 'none', md: 'block' } }}
      />

      <CountrySelect
        fullWidth
        hiddenLabel
        placeholder="Location"
        value={filters.state.location}
        onChange={(event, newValue) => filters.setState({ location: newValue })}
      />

      <Button
        size="large"
        variant="contained"
        color="primary"
        sx={{
          width: 1,
          [theme.breakpoints.up('md')]: {
            mr: 0.5,
            width: 48,
            minWidth: 'auto',
          },
        }}
      >
        <Iconify icon="carbon:search" />
      </Button>
    </Box>
  );

  const renderBrands = (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      gap={{ xs: 4, md: 2, lg: 4 }}
    >
      {_brands.slice(0, 4).map((brand) => (
        <SvgColor
          key={brand.id}
          src={brand.image}
          width={94}
          height={28}
          sx={{ color: 'text.disabled' }}
        />
      ))}
    </Box>
  );

  const renderSummary = (
    <Stack
      direction="row"
      spacing={{ xs: 1.5, sm: 3 }}
      divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      sx={{ color: 'common.white' }}
    >
      {[
        { label: 'Jobs', value: 2000000 },
        { label: 'Successful hiring', value: 500000 },
        { label: 'Partners', value: 250000 },
        { label: 'Employee', value: 156000 },
      ].map((item) => (
        <div key={item.label}>
          <Typography component="span" variant="h4" sx={{ mb: 0.75, display: 'block' }}>
            {fShortenNumber(item.value)}+
          </Typography>
          <Typography component="span" variant="body2" sx={{ opacity: 0.48 }}>
            {item.label}
          </Typography>
        </div>
      ))}
    </Stack>
  );

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-2.webp`,
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
      <Container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              gap: 5,
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h1" sx={{ color: 'common.white' }}>
              {`Get the `}
              <Box
                component="span"
                sx={{
                  ...textGradient(
                    `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                  ),
                }}
              >
                Career
              </Box>
              {` you deserve`}
            </Typography>

            <Typography sx={{ color: 'grey.500', maxWidth: 480 }}>
              Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
              venenatis ante odio sit amet eros.
            </Typography>

            {renderFilters}
            {renderBrands}
            {renderSummary}
          </Grid>

          <Grid xs={12} md={6} lg={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <CareerHeroIllustration />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
