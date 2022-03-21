import React, { useState } from 'react';

import {
  StyledHeaderContainer,
  Appbar,
  Feature,
  Slogan,
  Tabsearch,
  DrawerHeader,
} from '@components';

export const HeaderHome = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <StyledHeaderContainer>
      <div className='header-appbar'>
        <Appbar onClick={showDrawer} />
      </div>

      <div className='header-content'>
        <div className='header-slogan-and-feature'>
          <div className='header-slogan'>
            <Slogan
              screenName='home'
              title='Search hundreds of tours and more'
              content='Attractive tour and interesting experiences'
            />
          </div>
          <div className='header-feature'>
            <Feature />
          </div>
        </div>
        <div className='header-search'>
          <Tabsearch />
        </div>
      </div>
      <DrawerHeader onClose={onClose} drawerVisible={drawerVisible} />
    </StyledHeaderContainer>
  );
};
