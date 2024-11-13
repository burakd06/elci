import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { PusulaView } from 'src/pages/egiderpusulası/egiderpusulası-view';

// ----------------------------------------------------------------------

const metadata = { title: `E-Gider Pusulası ${CONFIG.appName}` };

export default function Page() {
   
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <PusulaView />
    </>
  );
}
