import React from 'react';
import styled from 'styled-components';

import { p1, p3 } from '@components';

export const BodyAboutIntroduce3 = () => {
  return (
    <StyledBodyAboutIntroduceContainer3>
      <div className='body-about-image'>
        <img src='/assets/BodyIntroduce4.png' />
      </div>
      <div className='body-about-title'>
        <h1>
          Experience the traditional cultural beauties of Vietnam
        </h1>
      </div>

      <div className='body-about-content'>
        <p>{p1}</p>
        <p>{p3}</p>
      </div>
    </StyledBodyAboutIntroduceContainer3>
  );
};

const StyledBodyAboutIntroduceContainer3 = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: left;

  text-align: left;
  font-family: 'DM Sans';
  font-style: normal;

  .body-about-image {
    width: 100%;
    margin-bottom: 60px;
    img {
      width: 100%;
      height: auto;
    }
  }

  .body-about-title {
    width: 47%;
    margin-bottom: 48px;
    > h1 {
      font-weight: 500;
      font-size: 40px;
      line-height: 100%;

      color: #1c1c1e;
    }
  }
  .body-about-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      width: 42%;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;

      color: #3d3e3f;
    }
  }

  @media (max-width: 1200px) {
    margin-top: 50px;

    .body-about-title {
      width: 100%;

      > h1 {
        font-size: 30px;
      }
    }

    .body-about-content {
      p {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    align-items: center;

    .body-about-image {
      margin-bottom: 20px;
    }
    .body-about-title {
      margin-bottom: 20px;
      width: 100%;
    }

    .body-about-content {
      display: flex;
      flex-direction: column;
      p {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }

  @media (max-width: 600px) {
    .body-about-title {
      width: 100%;
      h1 {
        font-size: 25px;
      }
    }

    .body-about-content {
      p {
        font-size: 12px;
      }
    }
  }
`;
