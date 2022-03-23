import React from 'react';

import { HeaderListHotel, ListTourBody, Footer } from '@components';

export const ListTourScreen = () => {
  return (
    <>
      <HeaderListHotel
        screenName='list_tour'
        urlBanner='/assets/bannerListtour.png'
      />
      <ListTourBody />
      <Footer />
    </>
  );
};
