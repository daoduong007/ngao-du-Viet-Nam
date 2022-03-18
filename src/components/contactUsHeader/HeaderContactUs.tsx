import React, { useState } from 'react';
import styled from 'styled-components';

import { Appbar, DrawerHeader } from '@components';

export const HeaderContactUs = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const onClose = () => {
    setDrawerVisible(false);
  };
  return (
    <StyledHeaderContactUs>
      <div className='header-appbar'>
        <Appbar onClick={showDrawer} />
      </div>
      <div className='content'>
        <h1>Contact Us</h1>
      </div>
      <DrawerHeader onClose={onClose} drawerVisible={drawerVisible} />
    </StyledHeaderContactUs>
  );
};

const StyledHeaderContactUs = styled.div`
  width: 100%;
  height: 568px;

  font-family: 'DM Sans';
  font-style: normal;

  background-image: url('/assets/bannerContactus.png');
  background-repeat: no-repeat;
  background-size: 100% 568px;
  h1 {
    font-weight: 500;
    font-size: 60px;
    line-height: 100%;
    /* identical to box height, or 60px */

    color: #ffffff;
  }

  .content {
    padding: 0 165px;
    margin-top: 175px;
    text-align: left;
  }
  @media (min-width: 3280px) {
    .content {
      margin-top: 125px;
      text-align: center;
    }
    h1 {
      font-size: 100px;
    }
  }
  @media (max-width: 600px) {
    background-size: 100% 200px;
    .content {
      padding: 0 10px;
      margin-top: 20px;
      text-align: center;
    }
    h1 {
      font-size: 35px;
    }
  }
`;
