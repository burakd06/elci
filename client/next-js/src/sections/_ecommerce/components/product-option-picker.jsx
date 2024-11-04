import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ProductOptionPicker({
  sx,
  color,
  memory,
  options,
  onSelectColor,
  onSelectMemory,
  ...other
}) {
  const renderColorOptions = (
    <Box gap={1} display="flex" flexWrap="wrap">
      {options.colors.map((option) => {
        const selected = color === option.value;

        return (
          <Box
            key={option.value}
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={() => onSelectColor(option.value)}
            sx={{
              width: 32,
              height: 32,
              borderRadius: 1,
              cursor: 'pointer',
              bgcolor: option.label,
              color: 'common.white',
            }}
          >
            <Iconify
              icon="eva:checkmark-fill"
              sx={{
                transform: selected ? 'scale(1)' : 'scale(0)',
                transition: (theme) =>
                  theme.transitions.create(['transform'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.shortest,
                  }),
              }}
            />
          </Box>
        );
      })}
    </Box>
  );

  const renderMemoryOptions = (
    <Box gap={1.5} display="flex" flexWrap="wrap">
      {options.memory.map((option) => {
        const selected = memory === option.value;

        return (
          <Box
            key={option.value}
            onClick={() => onSelectMemory(option.value)}
            sx={{
              py: 0.75,
              px: 1.5,
              borderRadius: 1,
              cursor: 'pointer',
              typography: 'subtitle2',
              border: (theme) =>
                `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
              ...(selected && {
                boxShadow: (theme) => `0 0 0 2px ${theme.vars.palette.text.primary}`,
              }),
            }}
          >
            {option.label}
          </Box>
        );
      })}
    </Box>
  );

  return (
    <Box gap={3} display="flex" flexDirection="column" sx={sx} {...other}>
      <div>
        <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
          Color
        </Typography>
        {renderColorOptions}
      </div>

      <div>
        <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
          Memory
        </Typography>
        {renderMemoryOptions}
      </div>
    </Box>
  );
}
