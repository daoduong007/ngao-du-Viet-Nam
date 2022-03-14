import React from 'react';

import {
  StyledHotelCheckOutContainer,
  HotelCheckOutTotalForm,
} from '@components';

export const HotelCheckOut = () => {
  return (
    <StyledHotelCheckOutContainer>
      <div>checkout</div>
      <div>
        <HotelCheckOutTotalForm />
      </div>
    </StyledHotelCheckOutContainer>
  );
};
