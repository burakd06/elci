import axios from 'axios';
import { Helmet } from 'react-helmet-async';

import { HomeView } from 'src/sections/_home/view/home-view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Elçi Yazılım',
  description:
    'elçi yazılım,elçi,yazılım,etrsoft,rahatfatura,emüstahsilmakbuzu,efatura,earşiv,earşiv fatura,kep,e imza',
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
