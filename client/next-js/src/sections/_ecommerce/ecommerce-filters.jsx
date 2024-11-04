import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Rating from '@mui/material/Rating';
import Collapse from '@mui/material/Collapse';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function EcommerceFilters({ open, onClose, options, filters }) {
  const { state, setState, onResetState } = filters;

  const getSelected = (selectedItems, item) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  const renderContent = (
    <>
      <Block title="Category">
        <Box gap={1} display="flex" flexDirection="column" sx={{ pt: 1.5 }}>
          {options.categories.map((option) => (
            <Box
              key={option}
              gap={1}
              display="flex"
              alignItems="center"
              onClick={() => setState({ category: option })}
              sx={{
                cursor: 'pointer',
                typography: 'body2',
                ...(state.category === option && {
                  fontWeight: 'fontWeightBold',
                }),
              }}
            >
              <Iconify width={14} icon="solar:alt-arrow-right-outline" sx={{ ml: -0.25 }} />
              {option}
            </Box>
          ))}
        </Box>
      </Block>

      <Block title="Brand">
        <Box display="flex" flexDirection="column" sx={{ pt: 1 }}>
          {options.brands.map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  size="small"
                  value={option}
                  checked={state.brands.includes(option)}
                  onChange={() => setState({ brands: getSelected(state.brands, option) })}
                  inputProps={{ id: `${option}-checkbox` }}
                />
              }
              label={option}
            />
          ))}
        </Box>
      </Block>

      <Block title="Price">
        <Box gap={2} display="flex" alignItems="center" sx={{ pt: 2 }}>
          <TextField
            size="small"
            label="$ Min"
            type="number"
            value={state.price[0]}
            onChange={(event) => setState({ price: [Number(event.target.value), state.price[1]] })}
            InputLabelProps={{ shrink: true }}
          />
          {' - '}
          <TextField
            size="small"
            label="$ Max"
            type="number"
            value={state.price[1]}
            onChange={(event) => setState({ price: [state.price[0], Number(event.target.value)] })}
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </Block>

      <Block title="Shipping">
        <Box display="flex" flexDirection="column" sx={{ pt: 1 }}>
          {options.shippings.map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  size="small"
                  value={option}
                  checked={state.shipping.includes(option)}
                  onChange={() => setState({ shipping: getSelected(state.shipping, option) })}
                  inputProps={{ id: `${option}-checkbox` }}
                />
              }
              label={option}
            />
          ))}
        </Box>
      </Block>

      <Block title="Ratings">
        <Box display="flex" flexDirection="column">
          {options.ratings.map((option, index) => (
            <Box
              key={option}
              gap={1}
              display="flex"
              alignItems="center"
              onClick={() => setState({ rating: option })}
              sx={{
                py: 1,
                opacity: 0.48,
                cursor: 'pointer',
                typography: 'body2',
                '&:hover': { opacity: 1 },
                ...(state.rating === option && {
                  opacity: 1,
                  fontWeight: 'fontWeightSemiBold',
                }),
              }}
            >
              <Rating readOnly size="small" value={4 - index} />& Up
            </Box>
          ))}
        </Box>
      </Block>

      <FormControlLabel
        control={
          <Switch
            checked={state.inStock}
            onChange={(event) => setState({ inStock: event.target.checked })}
            inputProps={{ id: 'in-stock-switch' }}
          />
        }
        label="Only in stock"
        sx={{
          [`& .${formControlLabelClasses.label}`]: { typography: 'subtitle1' },
        }}
      />

      <Block title="Tags">
        <Box gap={1} display="flex" flexWrap="wrap" sx={{ pt: 2 }}>
          {options.tags.map((option) => (
            <Chip
              key={option}
              size="small"
              label={option}
              variant="outlined"
              onClick={() => setState({ tags: getSelected(state.tags, option) })}
              sx={{
                ...(state.tags.includes(option) && {
                  bgcolor: 'action.selected',
                  fontWeight: 'fontWeightBold',
                }),
              }}
            />
          ))}
        </Box>
      </Block>

      <Button
        fullWidth
        color="inherit"
        size="large"
        variant="outlined"
        startIcon={<Iconify icon="solar:trash-bin-minimalistic-outline" />}
        onClick={onResetState}
      >
        Clear all
      </Button>
    </>
  );

  const renderDesktop = (
    <Stack spacing={3} sx={{ width: 280, flexShrink: 0, display: { xs: 'none', md: 'flex' } }}>
      {renderContent}
    </Stack>
  );

  const renderMobile = (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { p: 3, gap: 2.5, width: 280, display: 'flex', flexDirection: 'column' },
      }}
    >
      {renderContent}
    </Drawer>
  );

  return (
    <>
      {renderDesktop}
      {renderMobile}
    </>
  );
}

function Block({ title, children, sx, ...other }) {
  const contentOpen = useBoolean(true);

  return (
    <Box display="flex" flexDirection="column" sx={sx} {...other}>
      <Box
        display="flex"
        alignItems="center"
        onClick={contentOpen.onToggle}
        sx={{ width: 1, cursor: 'pointer' }}
      >
        <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>

        <Iconify width={16} icon={contentOpen.value ? 'eva:minus-outline' : 'eva:plus-outline'} />
      </Box>

      <Collapse unmountOnExit in={contentOpen.value} sx={{ px: 0.25 }}>
        {children}
      </Collapse>
    </Box>
  );
}
