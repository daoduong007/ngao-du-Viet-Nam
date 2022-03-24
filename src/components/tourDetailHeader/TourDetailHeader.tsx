import React, { useState } from 'react';

import {
  StyledTourDetailHeaderContainer,
  Appbar,
  DrawerHeader,
} from '@components';

export const TourDetailHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const onClose = () => {
    setDrawerVisible(false);
  };
  return (
    <StyledTourDetailHeaderContainer>
      <Appbar onClick={showDrawer} colorText='#1C1C1E' />
      <DrawerHeader onClose={onClose} drawerVisible={drawerVisible} />
      <hr />
    </StyledTourDetailHeaderContainer>
  );
};
