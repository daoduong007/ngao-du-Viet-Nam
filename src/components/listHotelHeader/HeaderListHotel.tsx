import React from 'react';

import {
  StyledHotelsHeaderContainer,
  AppBarDirectional,
  AppBarLogo,
  HeaderSearch,
  HeaderSlogan,
} from '@components';

export const HeaderListHotel = () => {
  return (
    <StyledHotelsHeaderContainer>
      <div className='header-app-bar'>
        <AppBarLogo />
        <AppBarDirectional />
      </div>
      <div className='header-content'>
        <div className='header-slogan-and-feature'>
          <div className='header-slogan-container'>
            <HeaderSlogan />
          </div>
          <div className='header-feature-container'></div>
        </div>
        <div className='header-search'>
          <HeaderSearch />
        </div>
      </div>
    </StyledHotelsHeaderContainer>
  );
};
