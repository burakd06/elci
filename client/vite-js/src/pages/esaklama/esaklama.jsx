import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { EsaklamaView } from 'src/pages/esaklama/esaklama.-view';

// ----------------------------------------------------------------------

const metadata = { title: `E-Saklama ${CONFIG.appName}` };

export default function Page() {
   
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <EsaklamaView />
    </>
  );
}
