import { _courses } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { ElearningCoursesView } from 'src/sections/_elearning/view/elearning-courses-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Course list | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return <ElearningCoursesView courses={_courses} />;
}
