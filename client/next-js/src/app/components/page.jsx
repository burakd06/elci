import { CONFIG } from 'src/config-global';

import { ComponentsView } from 'src/sections/_examples/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Components - ${CONFIG.appName}` };

export default function ComponentsPage() {
  return <ComponentsView />;
}
