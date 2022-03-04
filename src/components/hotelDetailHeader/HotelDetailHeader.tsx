import React from 'react';
import {
  AppBarDirectional,
  AppBarLogo,
  StyledHotelHeaderContainer,
} from '@components';

export const HotelDetailHeader = () => {
  return (
    <StyledHotelHeaderContainer>
      <div className='header-app-bar'>
        <AppBarLogo color={'#1C1C1E'} />
        <AppBarDirectional />
      </div>
      <hr className='hotel-header-hr' />
    </StyledHotelHeaderContainer>
  );
};
