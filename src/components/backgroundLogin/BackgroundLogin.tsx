import React from 'react';
import styled from 'styled-components';

import { Login, SignUp, ForgotPassword } from '@components';

interface IScreenName {
  screen: string;
}

export const BackgroundLogin = (props: IScreenName) => {
  const { screen } = props;

  return (
    <StyledBackgroundLogin>
      <div className='content'>
        {screen === 'login' ? (
          <Login />
        ) : screen === 'sign_up' ? (
          <SignUp />
        ) : screen == 'forgot_password' ? (
          <ForgotPassword />
        ) : null}
      </div>
      <div className='banner-image'></div>
    </StyledBackgroundLogin>
  );
};

const StyledBackgroundLogin = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  height: 100vh;

  .content {
    display: flex;
    align-items: center;
    width: 45%;
    padding: 0 140px;
  }

  .banner-image {
    width: 55%;
    background-image: url('/assets/bannerLogin.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  @media (max-width: 1200px) {
    .content {
      width: 100%;
      padding: 0 50px;
    }
  }
  @media (max-width: 768px) {
    .banner-image {
      display: none;
    }
    .content {
      width: 100vw;
      padding: 0 10px;
    }
  }
`;
