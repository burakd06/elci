import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Blog } from 'src/pages/blog/blog-view';

// ----------------------------------------------------------------------

const metadata = { title: `Blog ${CONFIG.appName}` };

export default function Page() {
   
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Blog />
    </>
  );
}
