import { CONFIG } from 'src/config-global';

import { MarketingServicesView } from 'src/sections/_marketing/view/marketing-services-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Services | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return <MarketingServicesView />;
}
