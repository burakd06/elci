import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { EimzaView } from 'src/pages/eimza/eimza-view';

// ----------------------------------------------------------------------

const metadata = { title: `E-imza ${CONFIG.appName}` };

export default function Page() {
   
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <EimzaView />
    </>
  );
}
