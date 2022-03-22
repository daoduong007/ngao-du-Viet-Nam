import React, { useState } from 'react';

import { StyledHeaderAbout, DrawerHeader, Appbar } from '@components';

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
      <Appbar onClick={showDrawer} />
      <div className='about-header-title'>
        <p>About us</p>
      </div>
      <DrawerHeader onClose={onClose} drawerVisible={drawerVisible} />
    </StyledHeaderAbout>
  );
};
