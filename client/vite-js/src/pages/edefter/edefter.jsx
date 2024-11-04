import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { EdefterView } from 'src/pages/edefter/edefter-view';

// ----------------------------------------------------------------------

const metadata = { title: `E-Defter ${CONFIG.appName}` };

export default function Page() {
   
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <EdefterView />
    </>
  );
}
