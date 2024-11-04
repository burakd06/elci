import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SerbestMakbuzView } from 'src/pages/eserbestmeslekmakbuzu/eserbestmeslekmakbuzu-view';

// ----------------------------------------------------------------------

const metadata = { title: `E-Serbest Meslek Makuzu ${CONFIG.appName}` };

export default function Page() {
   
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SerbestMakbuzView />
    </>
  );
}
