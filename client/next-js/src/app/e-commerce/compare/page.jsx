import { CONFIG } from 'src/config-global';

import { EcommerceCompareView } from 'src/sections/_ecommerce/view/ecommerce-compare-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Product compare | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return <EcommerceCompareView />;
}
