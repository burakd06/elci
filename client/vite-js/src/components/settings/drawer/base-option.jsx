import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import ButtonBase from '@mui/material/ButtonBase';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { SvgColor } from '../../svg-color';

// ----------------------------------------------------------------------

export function BaseOption({ icon, label, selected, ...other }) {
  return (
    <ButtonBase
      disableRipple
      sx={{
        px: 2,
        py: 2.5,
        borderRadius: 2,
        cursor: 'pointer',
        flexDirection: 'column',
        alignItems: 'flex-start',
        border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
        '&:hover': { bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08) },
        ...(selected && {
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
        }),
      }}
      {...other}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: 1, mb: 3 }}
      >
        <SvgColor width={28} src={`${CONFIG.assetsDir}/assets/icons/settings/ic-${icon}.svg`} />
        <Switch name={label} size="small" color="default" checked={selected} sx={{ mr: -0.75 }} />
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ width: 1 }}>
        <Box
          component="span"
          sx={{
            lineHeight: '18px',
            fontWeight: 'fontWeightSemiBold',
            fontSize: (theme) => theme.typography.pxToRem(13),
          }}
        >
          {label}
        </Box>
      </Box>
    </ButtonBase>
  );
}
