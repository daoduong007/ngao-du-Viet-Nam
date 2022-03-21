import React from 'react';
import styled from 'styled-components';

import { p1, p2 } from '@components';

export const BodyAboutIntroduce2 = () => {
  return (
    <StyledBodyAboutIntroduceContainer2>
      <div className='body-about-introduce'>
        <p>
          With{' '}
          <span className='introduce-title-title-color'>
            NgaoduVietnam
          </span>
          , immerses you in majestic space and unique cultural
          features
        </p>

        <div className='body-about-content'>
          <p>{p1}</p>
          <br />
          <p>{p2}</p>
        </div>
      </div>
      <div className='body-about-introduce-img'>
        <img src='/assets/BodyIntroduce3.png' />
      </div>
    </StyledBodyAboutIntroduceContainer2>
  );
};

const StyledBodyAboutIntroduceContainer2 = styled.div`
  margin-top: 150px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-family: 'DM Sans';
  font-style: normal;
  .body-about-introduce {
    width: 41%;
    > p {
      font-weight: 500;
      font-size: 40px;
      line-height: 100%;

      color: #1c1c1e;
      span {
        color: #ff7b42;
      }
    }
  }
  .body-about-content {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: #3d3e3f;
  }

  .body-about-introduce-img {
    width: 41%;
    img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 1200px) {
    margin-top: 0px;
    .body-about-introduce {
      > p {
        font-size: 30px;
      }
    }
    .body-about-content {
      font-size: 14px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 20px;
    .body-about-introduce-img {
      margin-bottom: 20px;
    }
    .body-about-introduce {
      width: 90%;
      > p {
        font-size: 30px;
      }
    }
    .body-about-content {
      width: 90%;

      font-size: 14px;
    }
  }
  @media (max-width: 600px) {
    .body-about-introduce {
      > p {
        font-size: 25px;
      }
    }
    .body-about-content {
      font-size: 12px;
    }
  }
`;
