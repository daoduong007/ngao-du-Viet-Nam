import React from 'react';
import styled from 'styled-components';

import { IconDoubleQuotes, p1, p2 } from '@components';

export const BodyIntroduce = () => {
  return (
    <StyledBodyIntroduceContainer>
      <div className='introduce-image'>
        {/* <div className='image-below'>
          <img src='/assets/BodyIntroduce1.png' />
        </div> */}
        {/* <div className='image-above'>
         
        </div> */}
        <img src={'/assets/BodyIntroduce2.png'} />
      </div>
      <div className='introduce-document'>
        <h1>
          With <span>NgaoduVietnam</span>, immerses you in majestic
          space and unique cultural features
        </h1>
        <div className='document-content'>
          <div className='document-icon'>
            <IconDoubleQuotes />
          </div>
          <div>
            <p>{p1}</p>
            <br />
            <p>{p2}</p>
          </div>
        </div>
      </div>
    </StyledBodyIntroduceContainer>
  );
};
const StyledBodyIntroduceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-family: 'DM Sans';
  font-style: normal;
  text-align: left;

  .introduce-image {
    width: 540px;
    height: 623px;
    /* display: flex;
    flex-direction: row; */

    background-image: url('/assets/BodyIntroduce1.png');
    background-repeat: no-repeat;
    background-size: 445px;
    position: relative;
    /* .image-below {
      width: 82%;
      > img {
        width: auto;
        height: auto;
        position: relative;
      }
    } */
    img {
      width: 64%;
      height: auto;
      position: absolute;
      left: 36%;
      top: 44%;
    }
  }
  .introduce-document {
    width: 538px;
    display: flex;
    flex-direction: column;

    h1 {
      padding-right: 20px;
      margin-bottom: 48px;

      font-weight: 500;
      font-size: 40px;
      line-height: 100%;

      color: #1c1c1e;
      span {
        color: #ff7b42;
      }
    }
    .document-icon {
      margin-right: 38px;
      margin-left: 10px;
    }
    .document-content {
      display: flex;
      flex-direction: row;

      font-weight: 400;
      font-size: 16px;
      line-height: 160%;

      color: #3d3e3f;
    }
  }
  @media (max-width: 1200px) {
    .introduce-image {
      margin-bottom: 20px;
      margin-right: 30px;
      width: 445px;
      background-size: 400px;
      img {
        top: 53%;
        left: 50%;
      }
    }
    .introduce-document {
      h1 {
        font-size: 30px;
      }
      .document-content {
        font-size: 14px;

        color: #3d3e3f;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;

    .introduce-image {
      width: 445px;
      height: 511px;
      background-size: 365px;
      margin-bottom: 70px;
      img {
      }
    }
    .introduce-document {
      width: 90%;
    }
  }

  @media (max-width: 600px) {
    .introduce-image {
      width: 280px;
      height: 322px;
      background-size: 298px;
      margin-bottom: 40px;
      img {
      }
    }
    .introduce-document {
      width: 90%;
      h1 {
        font-size: 25px;
      }
      .document-content {
        font-size: 12px;

        color: #3d3e3f;
      }
    }
  }
`;
