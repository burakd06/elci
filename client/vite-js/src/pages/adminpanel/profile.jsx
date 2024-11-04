import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ProfilePage } from 'src/pages/adminpanel/profilepage';

// ----------------------------------------------------------------------

const metadata = { title: `Login ${CONFIG.appName}` };

export default function Page() {

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ProfilePage />
    </>
  );
}
