import React from 'react';
import styled from 'styled-components';

import { AppBarDirectional, AppBarLogo } from '@components';

export const HeaderContactUs = () => {
  return (
    <StyledHeaderContactUs>
      <div className='app-bar'>
        <AppBarLogo />
        <AppBarDirectional />
      </div>
      <div className='content'>
        <h1>Contact Us</h1>
      </div>
    </StyledHeaderContactUs>
  );
};

const StyledHeaderContactUs = styled.div`
  width: 100%;
  height: 568px;
  padding: 0 165px;
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
  .app-bar {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .app-bar-directional {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .directionalItem {
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      color: #ffffff;

      &:hover {
        color: #ff7b42;
      }
    }
  }
  .content {
    margin-top: 175px;
    text-align: left;
  }
`;
