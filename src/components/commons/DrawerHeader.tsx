import React from 'react';
import { Drawer } from 'antd';
import styled from 'styled-components';

import { AppBarDirectional } from '@components';

interface IDrawer {
  drawerVisible: boolean;
  onClose: () => void;
  title?: string;
}

export const DrawerHeader = (props: IDrawer) => {
  const { onClose, drawerVisible, title } = props;
  return (
    <>
      <StyledDrawer
        title={title}
        placement='right'
        width='35%'
        onClose={onClose}
        visible={drawerVisible}
      >
        <AppBarDirectional />
      </StyledDrawer>
    </>
  );
};

const StyledDrawer = styled(Drawer)`
  @media (max-width: 600px) {
    .ant-drawer-content-wrapper {
      height: 43%;
    }

    .ant-drawer-header {
      display: none;
    }

    .ant-drawer-body {
      padding-right: 0px;

      background-color: #fbab7e;
      background-image: linear-gradient(
        180deg,
        #fbab7e 0%,
        #f7ce68 100%
      );
    }
    p {
      cursor: pointer;

      color: #ffffff;
      font-family: 'DM Sans';
      font-weight: 600;
      font-size: 14px;
      line-height: 160%;
    }
  }
  @media (min-width: 600px) {
    display: none;
  }
`;
