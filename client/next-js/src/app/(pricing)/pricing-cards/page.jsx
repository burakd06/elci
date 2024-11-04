import { CONFIG } from 'src/config-global';

import { PricingCardsView } from 'src/sections/pricing/view/pricing-cards-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Pricing cards - ${CONFIG.appName}` };

export default function Page() {
  return <PricingCardsView />;
}
