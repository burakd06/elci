import { CONFIG } from 'src/config-global';

import { AccountPaymentView } from 'src/sections/_account/view/account-payment-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Payment | Account - ${CONFIG.appName}` };

export default function Page() {
  return <AccountPaymentView />;
}
