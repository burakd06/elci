import { _offices } from 'src/_mock';

import { Map } from 'src/components/map';


import { MycontactForm } from './mycontact-form';
import  {MycontactGiris}  from './mycontact-giris';

// ----------------------------------------------------------------------

export function MycontactView() {
  return (
    <>
      <MycontactGiris />

      {/* <Map locations={_offices} /> */}

      <MycontactForm  />
    
      
    </>
  );
}
