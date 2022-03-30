import React, { useState } from 'react';
import styled from 'styled-components';

import { Appbar, DrawerHeader } from '@components';

export const DetailHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const onClose = () => {
    setDrawerVisible(false);
  };
  return (
    <StyledTourDetailHeaderContainer>
      <Appbar
        onClick={showDrawer}
        colorText='#1C1C1E'
        colorLogo='#1C1C1E;'
      />
      <DrawerHeader onClose={onClose} drawerVisible={drawerVisible} />
      <hr />
    </StyledTourDetailHeaderContainer>
  );
};

const StyledTourDetailHeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  p {
    color: #1c1c1e;
  }

  hr {
    width: 100%;
    margin: 25px 0 0 0;
    border: 0;
    border-bottom: 1px solid #c5c7c9;
  }

  @media (max-width: 600px) {
    height: 60px;
    > div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 30px;
      height: 50px;
      .app-bar-logo {
        display: none;
      }
    }
    hr {
      margin: 0;
    }
  }
  .menu-app-bar > .menu-outline-color > svg {
    color: #1c1c1e;
  }
`;
