import React from 'react';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

interface IAppbar {
  onClick?: () => void;
  colorText?: string;
  colorLogo?: string;
}

import { AppBarDirectional, AppBarLogo } from '@components';

export const Appbar = (props: IAppbar) => {
  const { onClick, colorText, colorLogo } = props;
  return (
    <StyledAppbar color={colorText}>
      <AppBarLogo color={colorLogo} />
      <AppBarDirectional />
      <div className='menu-app-bar'>
        <MenuOutlined
          onClick={onClick}
          className='menu-outline-color'
        />
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

  font-family: 'DM Sans';
  font-style: normal;

  .app-bar-logo:hover {
    cursor: pointer;
  }

  .menu-app-bar {
    display: none;
  }
  p {
    font-weight: normal;
    font-size: 0.87rem;
    line-height: 160%;

    color: ${(props) => props.color || '#FFFFFF'};
    &:hover {
      cursor: pointer;
      color: #ff7b42;
    }
  }
  .active {
    p {
      color: #ff7b42;
    }
  }
  .app-bar-directional {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 2540px) {
    padding-top: 20px;
    height: auto;
    .app-bar-logo {
      svg {
        width: 150px;
        height: 150px;
      }
    }
    .app-bar-directional {
      width: 35%;
      a > p {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 3280px) {
    padding-top: 30px;
    .app-bar-logo {
      svg {
        width: 200px;
        height: 200px;
      }
    }
    .app-bar-directional {
      a > p {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 10px 50px;
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
    padding: 10px 20px;
    .app-bar-logo {
      svg {
        width: 70px;
        height: 70px;
      }
    }
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
