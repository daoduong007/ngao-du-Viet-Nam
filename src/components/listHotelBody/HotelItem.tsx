import React from 'react';
import styled from 'styled-components';
import { Rate } from 'antd';

import { IHotelDetail } from '@interfaces';
import { IconMark, IconLocation } from '@components';

export const HotelItem = (props: IHotelDetail) => {
  const { imgUrl, star, location, name, rating, review, price } =
    props.data;
  return (
    <StyledHotelItem>
      <div className='item-image'>
        <div className='item-icon-mark'>
          <IconMark />
        </div>
        <img src={imgUrl} />
        <div className='item-star'>
          <Rate disabled defaultValue={star} />
        </div>
      </div>
      <div className='item-location'>
        <IconLocation />
        <p>{location}</p>
      </div>
      <div className='item-name'>
        <p>{name}</p>
      </div>
      <div className='item-rating-review-price'>
        <div className='item-rating-and-review'>
          <div className='item-rating'>
            <p>Rating :{rating}</p>
          </div>
          <div className='item-review'>
            {review} <span>reviews</span>
          </div>
        </div>

        <div className='item-price'>
          <p>
            from <span>{price}</span> /night
          </p>
        </div>
      </div>
    </StyledHotelItem>
  );
};

const StyledHotelItem = styled.div`
  margin-right: 30px;
  margin-top: 36px;
  width: 350px;
  display: flex;
  flex-direction: column;
  .item-image {
    position: relative;
    display: flex;
    flex-direction: column;
    .item-icon-mark {
      position: absolute;
      right: 18px;
      top: 0;
    }
    img {
      width: 350px;
      height: 249px;
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
      /* or 22px */
      /* subcolor 1 */
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
      /* or 22px */

      display: flex;
      align-items: center;

      /* subcolor 1 */

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
      /* or 19px */

      display: flex;
      align-items: center;

      color: #ffffff;
    }
  }
  .item-price {
    display: flex;
    align-items: center;
    p {
      margin: 0;

      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      /* subcolor 1 */

      color: #636567;
      span {
        font-size: 20px;
        line-height: 160%;
        /* identical to box height, or 32px */

        text-align: right;

        /* tieu de */

        color: #1c1c1e;
      }
    }
  }
`;
