import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { fDate } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function CareerJobDetailsInfo({
  sx,
  level,
  deadline,
  createdAt,
  languages,
  experience,
  ...other
}) {
  return (
    <Card
      sx={{
        p: 3,
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
      {...other}
    >
      <Item icon="solar:calendar-mark-outline" label="Date posted" value={fDate(createdAt)} />

      <Item
        icon="solar:hourglass-line-outline"
        label="Expiration date"
        value={fDate(deadline)}
        sx={{ color: 'error.main' }}
      />

      <Item icon="carbon:increase-level" label="Experience" value={`${experience} year exp`} />

      <Item icon="solar:user-rounded-outline" label="Level" value={level} />

      <Item
        icon="carbon:translate"
        label="Language"
        value={typeof languages === 'string' ? languages : languages.join(', ')}
      />
    </Card>
  );
}

function Item({ icon, label, value, sx }) {
  return (
    <Box gap={2} display="flex" sx={{ typography: 'subtitle2' }}>
      <Iconify width={24} icon={icon} />
      <div>
        {label}
        <Box
          component="span"
          sx={{
            display: 'block',
            typography: 'body2',
            color: 'text.secondary',
            ...sx,
          }}
        >
          {value || '-'}
        </Box>
      </div>
    </Box>
  );
}
