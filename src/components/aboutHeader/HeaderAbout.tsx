import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';

import {
  StyledHeaderAbout,
  AppBarDirectional,
  AppBarLogo,
  DrawerHeader,
} from '@components';

export const HeaderAbout = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const onClose = () => {
    setDrawerVisible(false);
  };
  return (
    <StyledHeaderAbout>
      <div className='header-app-bar'>
        <AppBarLogo />
        <AppBarDirectional />
        <div className='menu-app-bar'>
          <MenuOutlined onClick={showDrawer} />
        </div>
      </div>
      <div className='about-header-title'>
        <p>About us</p>
      </div>
      <DrawerHeader onClose={onClose} drawerVisible={drawerVisible} />
    </StyledHeaderAbout>
  );
};
