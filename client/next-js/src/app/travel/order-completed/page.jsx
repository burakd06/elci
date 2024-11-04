import { _tours } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { TravelOrderCompletedView } from 'src/sections/_travel/view/travel-order-completed-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Order completed | Travel - ${CONFIG.appName}` };

export default function Page() {
  return <TravelOrderCompletedView tour={_tours[8]} />;
}
