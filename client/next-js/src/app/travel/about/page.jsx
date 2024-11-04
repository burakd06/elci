import { CONFIG } from 'src/config-global';

import { TravelAboutView } from 'src/sections/_travel/view/travel-about-view';

// ----------------------------------------------------------------------

export const metadata = { title: `About us | Travel - ${CONFIG.appName}` };

export default function Page() {
  return <TravelAboutView />;
}
