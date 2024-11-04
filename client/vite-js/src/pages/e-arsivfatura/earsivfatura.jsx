import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ArsivFaturaView } from 'src/pages/e-arsivfatura/earsivfatura-view';

// ----------------------------------------------------------------------

const metadata = { title: `E-Arsiv Fatura ${CONFIG.appName}` };

export default function Page() {
   
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ArsivFaturaView />
    </>
  );
}
