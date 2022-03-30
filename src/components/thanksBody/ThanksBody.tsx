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
  background-size: cover;

  .content {
    width: 58%;
    height: 69%;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
      font-size: 4rem;
      line-height: 100%;

      text-align: center;

      color: #ff7b42;
    }
    h3 {
      font-weight: 400;
      font-size: 1.12rem;
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
        font-size: 1.14rem;
        line-height: 150%;

        color: #ffffff;
      }
    }
  }

  @media (min-width: 3250px) {
    .content {
      height: 1180px;
      padding: 350px 0;
    }
  }
  @media (max-width: 1200px) {
    .content {
      height: 327px;
      padding: 55px 0;
    }
  }
  @media (max-width: 900px) {
    .content {
      height: 290px;
      padding: 50px 0;
    }
  }
  @media (max-width: 600px) {
    .content {
      width: 90%;
      height: 400px;
      padding: 50px 0;

      h1 {
        font-size: 3rem;
      }
      h3,
      .ant-btn span {
        font-size: 1rem;
      }
    }
  }
`;
