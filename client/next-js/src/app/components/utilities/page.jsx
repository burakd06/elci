import { CONFIG } from 'src/config-global';

import { UtilitiesView } from 'src/sections/_examples/utilities-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Utilities | Components - ${CONFIG.appName}` };

export default function Page() {
  return <UtilitiesView />;
}
