import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ElearningCourseDetailsTeachers({ teachers, sx, ...other }) {
  return (
    <>
      <Typography component="h6" variant="h4" sx={{ mb: 5 }}>
        Instructors ({teachers.length})
      </Typography>

      <Box
        display="grid"
        gap={{ xs: 3, md: 4 }}
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)',
        }}
        sx={sx}
        {...other}
      >
        {teachers.map((teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </Box>
    </>
  );
}

function TeacherItem({ teacher }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        gap: 3,
        borderRadius: 2,
        display: 'flex',
        flexWrap: 'wrap',
        bgcolor: 'transparent',
      }}
    >
      <Avatar src={teacher.avatarUrl} sx={{ width: 72, height: 72 }} />

      <Stack spacing={1} flexGrow={1}>
        <Typography variant="h6">{teacher.name}</Typography>

        <Box gap={0.5} display="flex" alignItems="center" sx={{ typography: 'h6' }}>
          <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />

          {Number.isInteger(teacher.ratingNumber)
            ? `${teacher.ratingNumber}.0`
            : teacher.ratingNumber}

          {teacher.totalReviews && (
            <Link variant="body2" sx={{ color: 'text.secondary' }}>
              ({fShortenNumber(teacher.totalReviews)} reviews)
            </Link>
          )}
        </Box>

        <Box
          gap={1}
          display="flex"
          alignItems="center"
          sx={{ typography: 'body2', color: 'text.disabled' }}
        >
          <Iconify icon="solar:users-group-rounded-outline" />
          <span>
            <strong>{fShortenNumber(teacher.totalStudents)}</strong>
            {` students`}
          </span>
        </Box>

        <Box
          gap={1}
          display="flex"
          alignItems="center"
          sx={{ typography: 'body2', color: 'text.disabled' }}
        >
          <Iconify icon="solar:documents-minimalistic-outline" />
          <span>
            <strong>{teacher.totalCourses}</strong>
            {` lessons`}
          </span>
        </Box>
      </Stack>
    </Paper>
  );
}
