import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { FaturaView } from 'src/pages/e-fatura/efatura-view';

// ----------------------------------------------------------------------

const metadata = { title: `E-Fatura ${CONFIG.appName}` };

export default function Page() {
   
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <FaturaView />
    </>
  );
}
