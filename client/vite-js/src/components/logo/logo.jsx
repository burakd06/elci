import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { logoClasses } from './classes';


// ----------------------------------------------------------------------

export const Logo = forwardRef(
  ({ href = '/', isSingle = false, disableLink = false, sx, className, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_MAIN = theme.vars.palette.primary.main;

    const singleLogo = (
      <Box
      component="img"
      src="/logo/logo2.png"
      alt="Logo"
      sx={{ width: 200, height: 100 }} // Boyutu artırmak için px cinsinden
    />
    );

    const fullLogo = (
      <Box
      component="img"
      src="/logo/logo.png"
      alt="Logo"
      sx={{ width: 200, height: 100 }} // Boyutu artırmak için px cinsinden
    />
    );

    const baseStyles = {
      flexShrink: 0,
      color: 'inherit',
      display: 'inline-flex',
      verticalAlign: 'middle',
      // width: isSingle ? 0 : ,
      // height: isSingle ? 10 : 150,
      // ...sx,
    };

    return (
      <Box
        ref={ref}
        component={RouterLink}
        href={href}
        className={logoClasses.root.concat(className ? ` ${className}` : '')}
        aria-label="logo"
        sx={{
          ...baseStyles,
          ...(disableLink && { pointerEvents: 'none' }),
        }}
        {...other}
      >
        {isSingle ? singleLogo : fullLogo}
      </Box>
    );
  }
);
