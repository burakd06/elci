import { _jobs } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { CareerJobsView } from 'src/sections/_career/view/career-jobs-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Jobs | Career - ${CONFIG.appName}` };

export default function Page() {
  return <CareerJobsView jobs={_jobs} />;
}
