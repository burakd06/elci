import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { İrsaliyeView } from 'src/pages/e-irsaliye/eirsaliye-view';

// ----------------------------------------------------------------------

const metadata = { title: `E-Arsiv Fatura ${CONFIG.appName}` };

export default function Page() {
   
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <İrsaliyeView />
    </>
  );
}
