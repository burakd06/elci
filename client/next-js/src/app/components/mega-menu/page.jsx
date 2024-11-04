import { CONFIG } from 'src/config-global';

import { MegaMenuView } from 'src/sections/_examples/mega-menu-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Mega menu | Components - ${CONFIG.appName}` };

export default function Page() {
  return <MegaMenuView />;
}
