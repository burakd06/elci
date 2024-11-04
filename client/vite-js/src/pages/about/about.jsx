import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { MyAboutView } from 'src/pages/about/about-view';
// ----------------------------------------------------------------------

const metadata = { title: `Hakkımızda-${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      {/* <Typography>asdasd</Typography> */}
      <MyAboutView/>
    </>
  );
}
