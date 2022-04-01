import React from 'react';
import styled from 'styled-components';

import {} from '@components';

interface IHeaderSlogan {
  screenName?: string;
  title: string;
  content: string;
}

export const Slogan = (props: IHeaderSlogan) => {
  const { title, content, screenName } = props;
  return (
    <StyledSlogan screenName={screenName}>
      <div>
        <h2>{title}</h2>
      </div>
      <div className='slogan-content'>
        <h1>{content}</h1>
      </div>
    </StyledSlogan>
  );
};
const StyledSlogan = styled.div<{ screenName?: string }>`
  padding-top: 20px;
  padding-right: ${(props) =>
    props.screenName === 'home'
      ? '220px'
      : props.screenName === 'list_tour'
      ? '153px'
      : '114px'};

  text-align: left;
  font-family: 'DM Sans';
  font-style: normal;

  h2 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 26px;

    color: #fff2cf;
  }
  h1 {
    margin: 0;

    font-weight: 500;
    font-size: 3.75rem;
    line-height: 100%;

    color: #ffffff;
  }
  @media (min-width: 1441px) {
    padding-right: 0;
  }

  @media (min-width: 2540px) {
    h1 {
      font-size: 6rem;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 3280px) {
    h1 {
      font-size: 8rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 1200px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 12px;
    }
    h1 {
      font-size: 40px;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;

    h2 {
      margin: 0;
      font-size: 12px;
    }
    h1 {
      font-size: 25px;
    }
    .slogan-content {
      height: 52px;
    }
  }
`;
