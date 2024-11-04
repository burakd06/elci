import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Basvuru } from 'src/pages/insankaynakları/insankaynakları-view';

// ----------------------------------------------------------------------

const metadata = { title: `İnsan Kaynakları ${CONFIG.appName}` };

export default function Page() {
   
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Basvuru />
    </>
  );
}
