import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export function CareerJobDetailsCompanySimilar({ jobs, sx, ...other }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: 'background.default',
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h5" sx={{ mb: 1 }}>
        Jobs from this company
      </Typography>

      {jobs.map((job) => (
        <Stack
          key={job.id}
          spacing={0.5}
          sx={{
            py: 2,
            borderBottom: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
            '&:last-child': {
              borderBottom: 0,
            },
          }}
        >
          <Link component={RouterLink} href={paths.career.job} variant="subtitle1" color="inherit">
            {job.slug}
          </Link>

          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Expiration date {fDate(job.deadline)}
          </Typography>
        </Stack>
      ))}
    </Paper>
  );
}
