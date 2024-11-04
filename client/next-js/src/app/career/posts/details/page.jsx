import { CONFIG } from 'src/config-global';

import { CareerPostView } from 'src/sections/_career/view/career-post-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Post details | Career - ${CONFIG.appName}` };

export default function Page() {
  return <CareerPostView />;
}
