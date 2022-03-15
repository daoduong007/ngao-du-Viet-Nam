import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { AppRoutes } from '@enums';

export const ThanksBody = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push(AppRoutes.HOME_SCREEN);
  };
  return (
    <StyledThanks>
      <div className='content'>
        <h1>Thank you!</h1>
        <h3>
          Your order has been successfully ordered.
          <br /> Order information has been emailed to you. Thank you!
        </h3>
        <Button onClick={handleClick}>Back to our home</Button>
      </div>
    </StyledThanks>
  );
};
const StyledThanks = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url('/assets/bannerTkanks.png');

  background-repeat: no-repeat;
  background-size: 100% 100%;

  .content {
    width: 58%;
    height: 69%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    font-family: 'DM Sans';
    font-style: normal;

    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.88) 1.52%,
      rgba(255, 255, 255, 0.8) 100%
    );
    backdrop-filter: blur(42px);

    h1 {
      font-weight: 700;
      font-size: 64px;
      line-height: 100%;
      /* identical to box height, or 64px */

      text-align: center;

      color: #ff7b42;
    }
    h3 {
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      text-align: center;

      color: #2c2e2f;
    }
    .ant-btn {
      width: 293px;
      height: 54px;
      background: #ff7b42;
      border: 1px solid #ff7b42;
      span {
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;

        color: #ffffff;
      }
    }
  }
`;
