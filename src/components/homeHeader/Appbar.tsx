import React from 'react';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

interface IAppbar {
  onClick?: () => void;
}

import { AppBarDirectional, AppBarLogo } from '@components';

export const Appbar = (props: IAppbar) => {
  const { onClick } = props;
  return (
    <StyledAppbar>
      <AppBarLogo />
      <AppBarDirectional />
      <div className='menu-app-bar'>
        <MenuOutlined onClick={onClick} />
      </div>
    </StyledAppbar>
  );
};

const StyledAppbar = styled.div`
  width: 100%;
  height: 94px;

  padding: 0 165px;
  padding-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .menu-app-bar {
    display: none;
  }
  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    /* or 22px */
    color: #ffffff;
    &:hover {
      cursor: pointer;
      color: #ff7b42;
    }
  }
  .app-bar-directional {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 3280px) {
    .app-bar-directional {
      width: 30%;
    }

    .about-header-title {
      p {
        font-size: 80px;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 10px 30px;
    .app-bar-directional {
      width: 40%;
    }
  }
  @media (max-width: 768px) {
    padding: 10px 30px;
    .app-bar-directional {
      width: 50%;
    }
  }
  @media (max-width: 600px) {
    padding: 10px 30px;
    > .app-bar-directional {
      display: none;
    }
    .menu-app-bar {
      display: flex;
      svg {
        cursor: pointer;
        width: 30px;
        height: 30px;

        color: #ffffff;
      }
    }
  }
`;
