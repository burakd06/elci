import { m } from 'framer-motion';

import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';
import { varHover } from 'src/components/animate';

// ----------------------------------------------------------------------

export function AnimateButton() {
  return (
    <>
      <Fab
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.1, 0.95)}
        color="primary"
        size="small"
      >
        <Iconify width={24} icon="eva:plus-outline" />
      </Fab>

      <Fab
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover()}
        color="primary"
        size="medium"
      >
        <Iconify width={24} icon="eva:plus-outline" />
      </Fab>

      <Fab
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.08, 0.99)}
        color="primary"
      >
        <Iconify width={24} icon="eva:plus-outline" />
      </Fab>

      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.1, 0.95)}
        color="primary"
        size="small"
      >
        <Iconify width={24} icon="eva:plus-outline" />
      </IconButton>

      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover()}
        color="primary"
      >
        <Iconify width={24} icon="eva:plus-outline" />
      </IconButton>

      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.08, 0.99)}
        color="primary"
        size="large"
      >
        <Iconify width={24} icon="eva:plus-outline" />
      </IconButton>
    </>
  );
}
