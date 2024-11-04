import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { MycontactView } from 'src/pages/mycontact/mycontact-view';

// ----------------------------------------------------------------------

const metadata = { title: `İletişim  ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
        
      </Helmet>
        
      <MycontactView />
    </>
  );
}
