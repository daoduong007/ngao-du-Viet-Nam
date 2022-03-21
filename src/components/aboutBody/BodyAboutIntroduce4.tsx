import React from 'react';
import styled from 'styled-components';

import { p1 } from '@components';

export const BodyAboutIntroduce4 = () => {
  return (
    <StyledBodyAboutIntroduceContainer4>
      <div className='body-about-image'>
        <img src='/assets/BodyIntroduce5.png' />
      </div>
      <div className='body-about-content'>
        <p>{p1}</p>
        <div className='image-content'>
          <img src='/assets/BodyIntroduce6.png' />
        </div>
      </div>
    </StyledBodyAboutIntroduceContainer4>
  );
};

const StyledBodyAboutIntroduceContainer4 = styled.div`
  margin-top: 122px;
  margin-bottom: 150px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .body-about-image {
    width: 36%;
    img {
      width: 100%;
      height: auto;
    }
  }

  .body-about-content {
    width: 42%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      width: 100%;

      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;

      color: #3d3e3f;
    }

    .image-content {
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media (max-width: 1200px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    width: 90%;

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    .body-about-image {
      width: 100%;
      margin-bottom: 20px;
    }
    .body-about-content {
      width: 100%;
    }
    .body-about-content {
      p {
        font-size: 12px;
        margin-bottom: 20px;
      }
    }
  }
`;
