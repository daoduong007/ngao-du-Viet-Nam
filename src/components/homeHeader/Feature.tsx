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
  padding: 26px 125px 0 165px;

  font-family: 'DM Sans';
  font-style: normal;

  background-color: #ffffff;
  width: 100%;
  height: 99px;
  display: flex;
  flex-direction: column;

  position: relative;
  bottom: -1px;

  .feature-title {
    display: flex;
    flex-direction: row;
    align-items: center;

    h2 {
      margin: 0;

      font-weight: 600;
      font-size: 14px;
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
      font-size: 14px;
      line-height: 160%;
      /* or 38px */

      color: #1c1c1e;
      span {
        font-weight: 700;
        font-size: 24px;
      }
    }
  }
  @media (min-width: 2350px) {
    width: 100%;
    padding-right: 55%;
    padding-top: 15px;
    position: relative;
    bottom: -2px;
    .feature-title {
      h2 {
        font-size: 30px;
      }
    }
    .feature-content {
      p {
        font-size: 20px;
        span {
          font-size: 30px;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    padding: 0 10px 0 50px;
    padding-top: 20px;
    position: relative;
    bottom: -2px;
  }
`;
