import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { KepView } from 'src/pages/kep/kep-view';


const metadata = { title: `E-Arsiv Fatura ${CONFIG.appName}` };

export default function Page() {
   
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <KepView />
    </>
  );
}
