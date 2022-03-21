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
      <h2>{title}</h2>
      <h1>{content}</h1>
    </StyledSlogan>
  );
};
const StyledSlogan = styled.div<{ screenName?: string }>`
  padding: 0 165px;
  padding-top: 20px;
  padding-right: 114px;
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
    font-size: 16px;
    line-height: 160%;
    /* identical to box height, or 26px */

    color: #fff2cf;
  }
  h1 {
    font-weight: 500;
    font-size: 60px;
    line-height: 100%;
    /* or 60px */

    color: #ffffff;
  }
  @media (min-width: 3280px) {
    h1 {
      font-size: 100px;
    }
    h2 {
      font-size: 30px;
    }
  }
  @media (max-width: 1200px) {
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
    h2 {
      font-size: 12px;
    }
    h1 {
      font-size: 40px;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
