import { CONFIG } from 'src/config-global';

import { MarketingContactView } from 'src/sections/_marketing/view/marketing-contact-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Contact us | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return <MarketingContactView />;
}
