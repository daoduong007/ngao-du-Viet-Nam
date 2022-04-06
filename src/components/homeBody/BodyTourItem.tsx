import React from 'react';
import styled from 'styled-components';

import {
  IconLocation,
  IconDepatureTime,
  IconMark,
} from '@components';
import { ITourDetail } from '@interfaces';

interface ITourProps {
  data: ITourDetail;
  onClick: (id: number) => void;
}
export const BodyTourItem = (props: ITourProps) => {
  const { data, onClick } = props;
  return (
    <StyledBodyTourItem onClick={() => onClick(data.id)}>
      <div className='item-image'>
        <div className='item-icon-mark'>
          <IconMark />
        </div>
        <img src={data.imgUrl} />
      </div>
      <div className='item-location'>
        <div className='item-location-icon'>
          <IconLocation />
        </div>
        <p>{data.location}</p>
      </div>
      <div className='item-title'>
        <p>{data.title}</p>
      </div>
      <div className='item-infomation'>
        <div className='item-infomation-time'>
          <div className='item-infomation-icon'>
            <IconDepatureTime />
          </div>
          <div>
            <p>{data.timeDepature}</p>
          </div>
        </div>
        <div className='item-infomation-price'>
          <p>
            from <span>$ {data.price}</span>
          </p>
        </div>
      </div>
    </StyledBodyTourItem>
  );
};
const StyledBodyTourItem = styled.div`
  width: 350px;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
  p {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;

    color: #636567;
  }
  .item-image {
    position: relative;
    .item-icon-mark {
      position: absolute;
      right: 18px;
      top: -2px;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .item-location {
    display: flex;
    flex-direction: row;
    margin: 19px 0 11px 5px;
    svg {
      margin-right: 14px;
    }
  }
  .item-title {
    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;

      color: #1c1c1e;

      text-align: left;
    }
  }
  .item-infomation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .item-infomation-time {
      display: flex;
      flex-direction: row;
      svg {
        margin-right: 14px;
      }
    }
    .item-infomation-price {
    }
  }
  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    text-align: center;
    .item-title {
      height: 69px;
      p {
        margin: 0;
      }
    }
    .item-infomation {
      justify-content: space-between;
    }
  }
`;
