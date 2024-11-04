import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { LoginView } from 'src/pages/adminlogin/login-view';

// ----------------------------------------------------------------------

const metadata = { title: `Login ${CONFIG.appName}` };

export default function Page() {

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <LoginView />
    </>
  );
}
