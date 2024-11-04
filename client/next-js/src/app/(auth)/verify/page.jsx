import { CONFIG } from 'src/config-global';

import { VerifyView } from 'src/sections/auth/verify-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify - ${CONFIG.appName}` };

export default function Page() {
  return <VerifyView />;
}
