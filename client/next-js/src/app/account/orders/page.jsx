import { CONFIG } from 'src/config-global';

import { AccountOrdersView } from 'src/sections/_account/view/account-orders-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Orders | Account - ${CONFIG.appName}` };

export default function Page() {
  return <AccountOrdersView />;
}
