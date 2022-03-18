import React, { useState } from 'react';

import {
  StyledHotelsHeaderContainer,
  TabSearchTours,
  Slogan,
  Appbar,
  DrawerHeader,
} from '@components';

export const HeaderListHotel = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const onClose = () => {
    setDrawerVisible(false);
  };
  return (
    <StyledHotelsHeaderContainer>
      <Appbar onClick={showDrawer} />

      <div className='header-content'>
        <div className='header-slogan-and-feature'>
          <div className='header-slogan'></div>
          <Slogan
            title='Find deals on hotels, homes, and much more...'
            content='From cozy country homes to funky city apartments'
          />

          <div className='header-feature'></div>
        </div>
        <div className='header-search'>
          <TabSearchTours tabName='tab_hotel' />
        </div>
      </div>

      <DrawerHeader onClose={onClose} drawerVisible={drawerVisible} />
    </StyledHotelsHeaderContainer>
  );
};
