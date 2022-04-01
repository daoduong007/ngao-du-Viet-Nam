import React from 'react';
import styled from 'styled-components';

import { IconDot } from '@components';

export const Feature = () => {
  return (
    <StyledFeature>
      <div className='feature-title'>
        <IconDot />
        <h2>Feature</h2>
      </div>
      <div className='feature-content'>
        <div className='feature-content-item'>
          <p>
            <span>200+</span> tours
          </p>
        </div>
        <div className='feature-content-item'>
          <p>
            <span>100+</span> destination
          </p>
        </div>
        <div className='feature-content-item'>
          <p>
            <span>8+</span> type of tour
          </p>
        </div>
      </div>
    </StyledFeature>
  );
};
const StyledFeature = styled.div`
  position: relative;
  left: -165px;
  bottom: -1px;
  padding: 26px 125px 0 165px;
  width: calc(100% + 165px);
  height: 99px;

  font-family: 'DM Sans';
  font-style: normal;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;

  .feature-title {
    display: flex;
    flex-direction: row;
    align-items: center;

    h2 {
      margin: 0;

      font-weight: 600;
      font-size: 0.88rem;
      line-height: 100%;
      /* identical to box height, or 14px */

      color: #1c1c1e;
    }

    svg {
      margin-right: 8px;
    }
  }

  .feature-content {
    width: 100%;
    margin-top: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .feature-content-item {
      display: flex;
    }

    p {
      font-weight: 400;
      font-size: 0.88rem;
      line-height: 160%;
      /* or 38px */

      color: #1c1c1e;
      span {
        font-weight: 700;
        font-size: 1.5rem;
      }
    }
  }
  @media (min-width: 2540px) {
    padding-top: 15px;
    bottom: -2px;
    .feature-title {
      h2 {
        font-size: 2.2rem;
      }
    }
    .feature-content {
      width: 40%;
      p {
        font-size: 1.4rem;
        span {
          font-size: 2.2rem;
        }
      }
    }
  }
  @media (min-width: 3280px) {
    .feature-title {
      h2 {
        font-size: 2.8rem;
      }
    }
    .feature-content {
      width: 40%;
      p {
        font-size: 1.8rem;
        span {
          font-size: 2.8rem;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    bottom: -2px;

    padding: 10px 50px;
    left: -50px;
    width: calc(100% + 50px);
  }
  @media (max-width: 900px) {
    padding-right: 0;
    left: -50px;
    width: calc(100% + 50px);
  }
  @media (max-width: 768px) {
    left: 0;
    width: 100%;
    padding: 10px 30px;
    margin-top: 112px;
    height: 70px;

    .feature-title {
      h2 {
        font-size: 1rem;
      }
    }
    .feature-content {
      p {
        font-size: 0.5rem;
        span {
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 600px) {
    margin-top: 60px;
  }
  @media (max-width: 450px) {
    margin-top: 0px;
  }
`;
