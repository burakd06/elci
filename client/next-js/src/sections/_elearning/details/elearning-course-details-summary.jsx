import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { ElearningCourseDetailsLessonList } from './elearning-course-details-lesson-list';

// ----------------------------------------------------------------------

export function ElearningCourseDetailsSummary({ lessons, learnList, skills, sx, ...other }) {
  return (
    <Box gap={5} display="flex" flexDirection="column" sx={sx} {...other}>
      <ElearningCourseDetailsLessonList lessons={lessons || []} />

      <div>
        <Typography component="h6" variant="h4" sx={{ mb: 3 }}>
          What you will learn
        </Typography>

        <Stack component="ul" spacing={1}>
          {learnList?.map((learn) => (
            <Box component="li" key={learn} gap={1.5} display="flex" alignItems="center">
              <Iconify width={20} icon="eva:checkmark-fill" sx={{ color: 'primary.main' }} />
              {learn}
            </Box>
          ))}
        </Stack>
      </div>

      <div>
        <Typography component="h6" variant="h4" sx={{ mb: 3 }}>
          Skills you will gain
        </Typography>

        <Box gap={1} display="flex" flexWrap="wrap">
          {skills?.map((skill) => (
            <Chip key={skill} label={skill} size="small" variant="soft" onClick={() => {}} />
          ))}
        </Box>
      </div>

      <div>
        <Typography component="h6" variant="h4" sx={{ mb: 2 }}>
          Overview
        </Typography>
        <Typography>
          Consentaneum aeternitate dignitati commoventur primisque cupit mea officia peccata parens
          egone dolorem minuis. Secundae neglegi sextilius conantur commodaita siti philosophi ioca
          tenere lorem apparet assentior pudoris sint leves neglegebat unde reliquisti simile.
        </Typography>
      </div>
    </Box>
  );
}
