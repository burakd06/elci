import { Helmet } from 'react-helmet-async';

import { HomeView } from 'src/sections/_home/view/home-view';

import { CONFIG } from 'src/config-global';
// ----------------------------------------------------------------------

const metadata = { title: `Anasayfa  ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <HomeView />
    </>
  );
}
