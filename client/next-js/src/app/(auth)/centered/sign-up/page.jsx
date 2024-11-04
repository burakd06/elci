import { CONFIG } from 'src/config-global';

import { SignUpCenteredView } from 'src/sections/auth/sign-up-centered-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Layout centered - ${CONFIG.appName}` };

export default function Page() {
  return <SignUpCenteredView />;
}
