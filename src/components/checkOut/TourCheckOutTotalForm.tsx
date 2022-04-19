import React from 'react';
import { Input, Button } from 'antd';

import {
  IconLocation,
  IconDepatureTime,
  IconGuest,
} from '@components';
import styled from 'styled-components';

interface ITourTotalForm {
  data: {
    adults: number;
    children: number;
    timeString: [any, any];
  };
}

export const TourCheckOutTotalForm = (props: ITourTotalForm) => {
  const { data } = props;
  console.log(data.timeString[0], data.timeString[1]);
  return (
    <StyledCheckOutToTalFormContainer>
      <div className='total-form-title'>
        <p>
          Discover interesting things in the romantic coastal city of
          Vungtau
        </p>
      </div>
      <div className='total-form-location'>
        <IconLocation />
        <p>Vungtau city , Baria - Vungtau</p>
      </div>
      <div className='total-form-desciption'>
        <div className='total-form-duration'>
          <p>Duration</p>
          <p>
            <span>3 days - 2 nights</span>
          </p>
        </div>
        <div className='total-form-tour-type'>
          <p>Tour type:</p>
          <p>
            <span>Sun - Beach</span>
          </p>
        </div>
      </div>

      <div className='total-form-info'>
        <IconDepatureTime />
        <p>
          {data.timeString[0]} - {data.timeString[0]}
        </p>
      </div>
      <div className='total-form-info'>
        <IconGuest />
        <p>
          {data.adults} Adults - {data.children} Children:
        </p>
      </div>

      <div className='total-form-group-promo'>
        <div className='group-promo-code'>
          <Input placeholder='Promo Code' />
        </div>
        <div>
          <Button>Apply</Button>
        </div>
      </div>
      <div className='total-form-total'>
        <p>Total</p>
        <p>$450.00</p>
      </div>
    </StyledCheckOutToTalFormContainer>
  );
};

const StyledCheckOutToTalFormContainer = styled.div`
  margin-top: 158px;
  overflow: visible;

  width: 34%;
  height: 540px;
  padding: 39px 25px 0 30px;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;

  p {
    margin: 0;
    text-align: left;
    font-style: normal;
    font-weight: normal;
  }

  .total-form-info {
    width: 100%;
    height: 64px;
    margin-bottom: 20px;
    background-color: #ffffff;

    display: flex;
    align-items: center;

    svg {
      margin-left: 26px;
      margin-right: 15px;
    }
  }

  .total-form-title {
    p {
      font-weight: 600;
      font-size: 18px;
      line-height: 100%;
      /* or 18px */
      /* tieu de */
      color: #1c1c1e;
    }
    margin-bottom: 13px;
  }
  .total-form-location {
    display: flex;
    flex-direction: row;
    margin-bottom: 13px;
    svg {
      margin-right: 14px;
    }
    p {
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      /* subcolor 1 */
      color: #636567;
    }
  }
  .total-form-desciption {
    display: flex;
    flex-direction: row;
    margin-bottom: 17px;

    .total-form-duration {
      margin-right: 64px;
    }
    p {
      font-size: 14px;
      line-height: 24px;
      /* identical to box height, or 171% */
      /* subcolor 1 */
      color: #636567;
      > span {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;

        color: #1c1c1e;
      }
    }
  }
  .total-form-group-promo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .ant-input {
      height: 56px;
    }
    .ant-btn {
      height: 56px;
      width: 111px;
      border: 1px solid #ff7b42;
      span {
        font-weight: 600;
        font-family: Poppins;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */
        text-align: center;
        color: #ff7b42;
      }
    }
  }
  .total-form-total {
    height: 99px;
    margin: 33px -25px 0 -30px;
    background-color: #1c1c1e;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0 25px 0 30px;
      font-size: 20px;
      line-height: 160%;
      /* identical to box height, or 32px */
      color: #ffffff;
    }
  }

  @media (max-width: 1200px) {
    width: 45%;
  }
  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 50%;
    margin: 30px 0;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
