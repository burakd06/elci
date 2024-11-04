import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const NAV_ITEMS = [
  {
    subheader: 'Marketing',
    items: [
      {
        title: 'Landing',
        path: '#landing',
        icon: <Iconify icon="solar:home-angle-linear" />,
        roles: ['admin'],
        caption: 'Display only admin role',
        info: <Label color="error">+2 </Label>,
      },
      {
        title: 'Services',
        path: '#services',
        icon: <Iconify icon="carbon:chart-average" />,
        roles: ['admin', 'user'],
      },
      {
        title: 'Blog',
        path: '#blog',
        icon: <Iconify icon="carbon:blog" />,
        info: <Label color="info">+3 </Label>,
        children: [
          {
            title: 'Item 1',
            path: '#blog/item-1',
            caption: 'Display caption',
            info: '+2',
          },
          { title: 'Item 2', path: '#blog/item-2' },
        ],
      },
    ],
  },
  {
    subheader: 'Travel',
    items: [
      {
        title: 'About',
        path: '#about',
        icon: <Iconify icon="solar:users-group-rounded-linear" />,
        info: '+4',
      },
      {
        title: 'Contact',
        path: '#contact',
        icon: <Iconify icon="solar:phone-calling-linear" />,
      },
      {
        title: 'Level',
        path: '#level',
        icon: <Iconify icon="solar:hamburger-menu-linear" />,
        children: [
          {
            title: 'Level 2a',
            path: '#level/2a',
            icon: <Iconify icon="solar:chat-round-call-linear" />,
            caption: 'This is the caption',
            children: [
              { title: 'Level 3a', path: '#level/2a/3a' },
              {
                title: 'Level 3b',
                path: '#level/2a/3b',
                children: [
                  { title: 'Level 4a', path: '#level/2a/3b/4a' },
                  { title: 'Level 4b', path: '#level/2a/3b/4b' },
                ],
              },
              { title: 'Level 3c', path: '#level/2a/3c' },
            ],
          },
          {
            title: 'Level 2b',
            path: '#level/2b',
            icon: <Iconify icon="solar:mailbox-linear" />,
          },
          {
            title: 'Level 2c',
            path: '#level/2c',
            icon: <Iconify icon="solar:calendar-date-linear" />,
          },
        ],
      },
    ],
  },
];
