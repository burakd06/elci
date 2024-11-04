import { CONFIG } from 'src/config-global';

import { MarketingAboutView } from 'src/sections/_marketing/view/marketing-about-view';

// ----------------------------------------------------------------------

export const metadata = { title: `About us | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return <MarketingAboutView />;
}
