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
      <Appbar onClick={showDrawer} />
      <div className='header-content'>
        <div className='header-slogan-and-feature'>
          <div className='header-slogan'>
            <Slogan
              screenName='home'
              title='Welcome to NgaoduVietnam'
              content='Perfect place for your stories'
            />
          </div>
          <Feature />
        </div>
        <div className='header-search'>
          <Tabsearch />
        </div>
      </div>
      <DrawerHeader onClose={onClose} drawerVisible={drawerVisible} />
    </StyledHeaderContainer>
  );
};
