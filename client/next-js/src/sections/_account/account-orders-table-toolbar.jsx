import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function AccountOrdersTableToolbar({
  sx,
  rowCount,
  numSelected,
  onSelectAllRows,
  ...other
}) {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        pr: 2,
        top: 0,
        left: 0,
        width: 1,
        zIndex: 9,
        height: 58,
        borderRadius: 1,
        position: 'absolute',
        bgcolor: 'text.primary',
        color: 'background.paper',
        ...sx,
      }}
      {...other}
    >
      <Checkbox
        disableRipple
        indeterminate={numSelected > 0 && numSelected < rowCount}
        checked={rowCount > 0 && numSelected === rowCount}
        onChange={onSelectAllRows}
        inputProps={{
          'aria-label': 'select all desserts',
        }}
      />

      <Box component="span" flexGrow={1} sx={{ typography: 'subtitle2' }}>
        {numSelected} selected
      </Box>

      <Tooltip title="Delete">
        <IconButton color="inherit">
          <Iconify icon="solar:trash-bin-minimalistic-outline" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
