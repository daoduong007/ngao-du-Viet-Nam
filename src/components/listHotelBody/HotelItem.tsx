import React from 'react';
import styled from 'styled-components';
import { Rate } from 'antd';

import { IHotelDetail } from '@interfaces';
import { IconMark, IconLocation } from '@components';

interface IHotelProps {
  data: IHotelDetail;
  onClick: (id: number) => void;
}
export const HotelItem = (props: IHotelProps) => {
  const { data, onClick } = props;
  return (
    <StyledHotelItem onClick={() => onClick(data.id)}>
      <div className='item-image'>
        <div className='item-icon-mark'>
          <IconMark />
        </div>
        <img src={data.imgUrl} />
        <div className='item-star'>
          <Rate disabled defaultValue={data.star} />
        </div>
      </div>
      <div className='item-location'>
        <IconLocation />
        <p>{data.location}</p>
      </div>
      <div className='item-name'>
        <p>{data.name}</p>
      </div>
      <div className='item-rating-review-price'>
        <div className='item-rating-and-review'>
          <div className='item-rating'>
            <p>Rating : {data.rating}</p>
          </div>
          <div className='item-review'>
            {data.review} <span>reviews</span>
          </div>
        </div>

        <div className='item-price'>
          <p>
            from <span>{data.price}</span> /night
          </p>
        </div>
      </div>
    </StyledHotelItem>
  );
};

const StyledHotelItem = styled.div`
  width: 350px;

  display: flex;
  flex-direction: column;
  text-align: left;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
  .item-image {
    position: relative;
    display: flex;
    flex-direction: column;
    .item-icon-mark {
      position: absolute;
      right: 18px;
      top: -2px;
    }
    img {
      width: 100%;
      height: auto;
    }
    .item-star {
      position: relative;
      top: -45px;
      left: 16px;
    }
  }
  .item-location {
    display: flex;
    flex-direction: row;
    svg {
      margin-right: 14px;
    }
    p {
      margin: 0;
      font-size: 14px;
      line-height: 160%;

      color: #636567;
    }
  }
  .item-name {
    margin-top: 14px;
    height: 46px;
    p {
      margin: 0;
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
      /* tieu de */
      color: #1c1c1e;
    }
  }
  .item-rating-review-price {
    margin-top: 20.5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .item-rating-and-review {
    display: flex;
    flex-direction: row;
  }
  .item-review {
    display: flex;
    align-items: center;
    margin-left: 5px;
    p {
      font-size: 14px;
      line-height: 160%;

      display: flex;
      align-items: center;

      color: #636567;
    }
  }
  .item-rating {
    background-color: #ff7b42;
    width: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
    p {
      margin: 0;
      font-weight: bold;
      font-size: 12px;
      line-height: 160%;

      display: flex;
      align-items: center;

      color: #ffffff;
    }
  }
  .item-price {
    display: flex;
    align-items: center;
    text-align: right;
    p {
      margin: 0;

      font-size: 14px;
      line-height: 160%;

      color: #636567;
      span {
        font-size: 20px;
        line-height: 160%;

        text-align: right;

        color: #1c1c1e;
      }
    }
  }

  @media (max-width: 1440px) {
    width: 100%;
  }
`;
