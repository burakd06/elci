import { CONFIG } from 'src/config-global';

import { CareerAboutView } from 'src/sections/_career/view/career-about-view';

// ----------------------------------------------------------------------

export const metadata = { title: `About us | Career - ${CONFIG.appName}` };

export default function Page() {
  return <CareerAboutView />;
}
