import React from 'react';
import styled from 'styled-components';

import { Login } from '@components';

interface IScreenName {
  screen: string;
}

export const BackgroundLogin = (props: IScreenName) => {
  const { screen } = props;

  return (
    <StyledBackgroundLogin>
      <div className='content'>
        {screen === 'login' ? <Login /> : null}
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
    padding: 0 145px;
  }

  .banner-image {
    width: 55%;
    background-image: url('/assets/bannerLogin.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`;
