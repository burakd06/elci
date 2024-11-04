import { CONFIG } from 'src/config-global';

import { IconsView } from 'src/sections/_examples/icons-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Icons | Components - ${CONFIG.appName}` };

export default function Page() {
  return <IconsView />;
}
