import axios from 'axios';
import { Helmet } from 'react-helmet-async';

import { HomeView } from 'src/sections/_home/view/home-view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Elçi Yazılım',
  description:
    'The ZONE is built on top of MUI, a powerful library that provides flexible, customizable, and easy-to-use components.',
  keywords: 'elçi yazılım,elçi,yazılım,etrsoft,rahatfatura,emüstahsilmakbuzu,efatura,earşiv,earşiv fatura,kep,e imza',
};


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
