import React from 'react';

import {
  StyledListTourHeaderContainer,
  Appbar,
  Slogan,
  StyledHeaderNoFeature,
  TabSearchTours,
} from '@components';

export const ListTourHeader = () => {
  return (
    <StyledListTourHeaderContainer>
      <div>
        <img src='/assets/bannerListtour.png' />
      </div>
      <Appbar />
      <Slogan />
      <div className='listtour-search'>
        <TabSearchTours />
      </div>
      <StyledHeaderNoFeature />
    </StyledListTourHeaderContainer>
  );
};
