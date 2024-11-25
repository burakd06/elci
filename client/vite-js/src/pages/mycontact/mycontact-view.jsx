import React from 'react';
import { MycontactForm } from './mycontact-form';
import { MycontactGiris } from './mycontact-giris';
import {MyGoogleMap} from './mygooglemaps'; // Import the Google Map component

export function MycontactView() {
  return (
    <>
      <MycontactGiris />

      {/* Embed the Google Map */}
      <MyGoogleMap />

      <MycontactForm />
    </>
  );
}
