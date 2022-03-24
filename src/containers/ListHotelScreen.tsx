import React from 'react';

import { HeaderListHotel, BodyListHotel, Footer } from '@components';

export const ListHotelScreen = () => {
  return (
    <>
      <HeaderListHotel screenName='list_hotel' />
      <BodyListHotel />
      <Footer />
    </>
  );
};
