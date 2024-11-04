import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/use-boolean';

import { Logo } from 'src/components/logo';
import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { NavBasicMobile, NavBasicDesktop } from 'src/components/nav-basic';

// ----------------------------------------------------------------------

export function NavBasic() {
  const mobileOpen = useBoolean();

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          gap: 2,
          width: 1,
          borderRadius: 2,
          display: 'flex',
          overflowX: 'auto',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <IconButton onClick={mobileOpen.onTrue}>
          <Iconify icon="carbon:menu" />
        </IconButton>

        <NavBasicDesktop
          data={NAV_ITEMS}
          cssVars={{
            '--nav-item-gap': '16px',
          }}
          slotProps={{
            rootItem: {
              sx: {},
              icon: {},
              texts: {},
              title: {
                // typography: 'subtitle1',
                // fontFamily: (theme) => theme.typography.fontSecondaryFamily,
              },
              caption: {},
              arrow: {},
            },
            subItem: {
              sx: {},
              icon: {},
              texts: {},
              title: {},
              caption: {},
              arrow: {},
            },
            paper: {},
          }}
        />
      </Paper>

      <Drawer
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{ sx: { width: 280 } }}
      >
        <Box sx={{ pl: 2.5, py: 2 }}>
          <Logo />
        </Box>
        <NavBasicMobile
          sx={{ px: 1.5 }}
          data={NAV_ITEMS}
          cssVars={{
            '--nav-item-gap': '8px',
          }}
          slotProps={{
            rootItem: {
              sx: {},
              icon: {},
              texts: {},
              title: {
                // typography: 'subtitle1',
                // fontFamily: (theme) => theme.typography.fontSecondaryFamily,
              },
              caption: {},
              info: {},
              arrow: {},
            },
            subItem: {
              sx: {},
              icon: {},
              texts: {},
              title: {},
              caption: {},
              info: {},
              arrow: {},
            },
            paper: {},
          }}
        />
      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------

export const NAV_ITEMS = [
  {
    title: 'Home',
    path: '#',
    icon: <Iconify icon="carbon:chart-average" />,
  },
  {
    title: 'Page',
    path: '/basic/page',
    caption: 'This is the caption',
    icon: <Iconify icon="solar:users-group-rounded-linear" />,
    info: <Label color="info">+2</Label>,
    children: [
      {
        title: 'Page 1',
        path: '/basic/page/1',
        icon: <Iconify icon="solar:phone-calling-linear" />,
        caption: 'This is the caption',
        info: '+3',
        children: [
          { title: 'Page 1.1', path: '/basic/page/1/1' },
          { title: 'Page 1.2', path: '/basic/page/1/2' },
        ],
      },
      {
        title: 'Page 2',
        path: '/basic/page/2',
        icon: <Iconify icon="solar:chat-round-call-linear" />,
        children: [
          { title: 'Page 2.1', path: '/basic/page/2/1' },
          { title: 'Page 2.2', path: '/basic/page/2/2' },
          {
            title: 'Page 2.3',
            path: '/basic/page/2/3',
            children: [
              { title: 'Page 2.3.1', path: '/basic/page/2/3/1' },
              { title: 'Page 2.3.2', path: '/basic/page/2/3/2' },
              { title: 'Page 2.3.3', path: '/basic/page/2/3/3' },
            ],
          },
        ],
      },
      {
        title: 'Page 3',
        path: '#',
        icon: <Iconify icon="solar:calendar-date-linear" />,
      },
    ],
  },
  {
    title: 'Blog',
    path: '#',
    icon: <Iconify icon="solar:mailbox-linear" />,
  },
  {
    title: 'Contact',
    path: '#',
    icon: <Iconify icon="solar:users-group-rounded-linear" />,
    disabled: true,
  },
  {
    title: 'External',
    path: 'https://www.google.com/',
    icon: <Iconify icon="solar:calendar-date-linear" />,
  },
];
