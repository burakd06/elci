import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { BeyanView } from 'src/pages/beyan/beyan-view';

// ----------------------------------------------------------------------

const metadata = { title: `E- Müstahsil ${CONFIG.appName}` };

export default function Page() {
   
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <BeyanView />
    </>
  );
}
