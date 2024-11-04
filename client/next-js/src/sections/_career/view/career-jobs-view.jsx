'use client';

import Container from '@mui/material/Container';

import { useSetState } from 'src/hooks/use-set-state';

import { _tags, _jobTitles, JOB_BENEFIT_OPTIONS } from 'src/_mock';

import { CareerFilters } from '../career-filters';
import { CareerJobList } from '../list/career-job-list';
import { CareerNewsletter } from '../career-newsletter';

// ----------------------------------------------------------------------

export function CareerJobsView({ jobs }) {
  const filters = useSetState({
    keyword: null,
    categories: null,
    location: null,
    type: [],
    level: [],
    benefits: [],
    salary: [0, 20000],
  });

  return (
    <>
      <Container>
        <CareerFilters
          filters={filters}
          options={{
            keywords: _jobTitles,
            categories: _tags,
            types: ['Part time', 'Full time', 'Freelance'],
            levels: [
              'Manager',
              'Intern/student',
              'No experience',
              'Senior',
              'Supervisor',
              'Director',
            ],
            benefits: JOB_BENEFIT_OPTIONS,
          }}
          sx={{ my: { xs: 3, md: 5 } }}
        />

        <CareerJobList jobs={jobs || []} />
      </Container>

      <CareerNewsletter />
    </>
  );
}
