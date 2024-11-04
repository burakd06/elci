import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { fDate, formatStr } from 'src/utils/format-time';

import { TOUR_SERVICE_OPTIONS } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function TravelTourDetailsSummary({
  sx,
  program,
  location,
  duration,
  services,
  available,
  tourGuide,
  languages,
  highlights,
  description,
  ...other
}) {
  return (
    <Box gap={5} display="flex" flexDirection="column" sx={sx} {...other}>
      <div>
        <Typography component="h6" variant="h5" sx={{ mb: 3 }}>
          Overview
        </Typography>

        <Box
          rowGap={2.5}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          }}
        >
          <OverviewItem
            icon="solar:calendar-mark-outline"
            label="Available"
            text={`${fDate(available?.start, formatStr.split.date)} - ${fDate(available?.end, formatStr.split.date)}`}
          />
          <OverviewItem
            icon="solar:user-rounded-outline"
            label="Contact name"
            text={tourGuide?.name}
          />
          <OverviewItem icon="carbon:location" label="Location" text={location} />
          <OverviewItem
            icon="solar:smartphone-outline"
            label="Contact phone"
            text={tourGuide?.phoneNumber}
          />
          <OverviewItem icon="solar:clock-circle-outline" label="Durations" text={duration} />
          <OverviewItem icon="carbon:translate" label="Languages" text={languages?.join(', ')} />
        </Box>
      </div>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <div>
        <Typography component="h6" variant="h5" sx={{ mb: 2 }}>
          Description
        </Typography>
        <Typography>{description}</Typography>
      </div>

      <div>
        <Typography component="h6" variant="h5" sx={{ mb: 2 }}>
          Highlights
        </Typography>
        <Box component="ul" sx={{ pl: 3, listStyleType: 'disc', lineHeight: 2 }}>
          {highlights?.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </Box>
      </div>

      <div>
        <Typography component="h6" variant="h5" sx={{ mb: 2 }}>
          Services
        </Typography>
        <Box
          rowGap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          {TOUR_SERVICE_OPTIONS.map((service) => (
            <Box
              key={service.label}
              gap={1}
              display="flex"
              alignItems="center"
              sx={{
                ...(services?.includes(service.label) && {
                  color: 'text.disabled',
                }),
              }}
            >
              <Iconify
                icon="eva:checkmark-fill"
                sx={{
                  color: 'primary.main',
                  ...(services?.includes(service.label) && {
                    color: 'text.disabled',
                  }),
                }}
              />
              {service.label}
            </Box>
          ))}
        </Box>
      </div>

      <div>
        <Typography component="h6" variant="h5" sx={{ mb: 2 }}>
          Program
        </Typography>
        <Stack spacing={3}>
          {program?.map((item) => (
            <div key={item.label}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 1, display: 'flex', alignItems: 'center', color: 'primary.main' }}
              >
                <Box
                  component="span"
                  sx={{ mr: 1.5, width: 12, height: 2, borderRadius: 1, bgcolor: 'currentColor' }}
                />
                {item.label}
              </Typography>
              <Typography>{item.text}</Typography>
            </div>
          ))}
        </Stack>
      </div>
    </Box>
  );
}

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <Box gap={1.5} display="flex">
      <Iconify width={24} icon={icon} />
      <div>
        <Typography variant="body2" sx={{ mb: 0.5, color: 'text.secondary' }}>
          {label}
        </Typography>
        <Typography>{text}</Typography>
      </div>
    </Box>
  );
}
