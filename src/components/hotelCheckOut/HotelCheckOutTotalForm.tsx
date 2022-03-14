import React from 'react';
import styled from 'styled-components';
import { Button, DatePicker, Input } from 'antd';

import {
  IconDepatureTime,
  IconGuest,
  IconLocation,
} from '@components';

export const HotelCheckOutTotalForm = () => {
  const { RangePicker } = DatePicker;
  const handleApplyPromoCode = () => {
    //
  };
  return (
    <StyledTotalForm>
      <div className='title'>
        <p>TownePlace Suites Gaithersburg by Marriott</p>
      </div>
      <div className='location'>
        <IconLocation />
        <p>Vungtau City, Baria-Vungtau</p>
      </div>

      <div className='date'>
        <IconDepatureTime color={'#FF7B42'} />
        <RangePicker
          placeholder={['Start', 'End']}
          suffixIcon={null}
          bordered={false}
        />
      </div>

      <div className='people '>
        <Input
          size='large'
          // placeholder='2 Adults - 1 Children'
          defaultValue='2 Adults - 1 Children'
          prefix={<IconGuest color={'#FF7B42'} />}
          bordered={false}
        />
      </div>

      <div className='room'>
        <span>1 x</span> Standard Room
      </div>
      <div className='add-ons'>
        <p>
          <span>Add-ons:</span>
        </p>
        <div className='add-ons-content'>
          <p>Breakfast</p>
          <p>$120</p>
        </div>
      </div>
      <div className='promo-code'>
        <div className='promo-code-input'>
          <Input placeholder='Promo code' bordered={false} />
        </div>
        <div className='promo-code-submit'>
          <Button onClick={handleApplyPromoCode}>Apply</Button>
        </div>
      </div>
      <div className='total'>
        <p>Total</p>
        <p>
          <span>$450</span>
        </p>
      </div>
    </StyledTotalForm>
  );
};

const StyledTotalForm = styled.div`
  margin-top: 158px;
  width: 380px;
  height: 610px;
  background: #f4f4f4;

  font-family: 'DM Sans';
  font-style: normal;
  padding: 39px 37px 0 30px;
  text-align: left;
  p {
    margin: 0;
  }
  .title {
    margin-bottom: 19px;

    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    /* or 27px */

    /* tieu de */

    color: #1c1c1e;
  }
  .location {
    display: flex;
    flex-direction: row;
    margin-bottom: 26px;

    svg {
      margin-right: 14px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      /* subcolor 1 */

      color: #636567;
    }
  }
  .date,
  .people {
    display: flex;
    height: 64px;

    background: #ffffff;
    margin-bottom: 20px;
    align-items: center;

    svg {
      margin: 0 17.5px 0 26px;
    }
  }
  .date {
    .ant-picker-range .ant-picker-active-bar {
      background-color: #ff7b42;
    }
    .anticon {
      display: none;
    }
  }
  .people {
    .ant-input-affix-wrapper-lg {
      padding: 0;
    }
  }
  .room {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 15px;
    span {
      color: #ff7b42;
    }
  }
  .add-ons {
    margin-bottom: 20px;
    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 42px;
      /* identical to box height, or 262% */

      color: #2a2a2a;
      span {
        font-weight: 700;
        /* identical to box height, or 262% */

        color: #888888;
      }
    }
    .add-ons-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .promo-code {
    margin-bottom: 33px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .promo-code-input {
      .ant-input {
        width: 196px;
        height: 56px;
        background: #ffffff;
      }
      .ant-input:active,
      .ant-input:focus {
        border: 1px solid #ff7b42;
      }
    }
    .promo-code-submit {
      .ant-btn {
        width: 111px;
        height: 56px;
        border: 1px solid #ff7b42;
        span {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height, or 150% */

          text-align: center;

          color: #ff7b42;
        }
      }
    }
  }
  .total {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: -30px;
    margin-right: -37px;
    padding: 0 37px 0 30px;
    height: 99px;
    background: #1c1c1e;

    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 160%;
      /* identical to box height, or 32px */

      color: #ffffff;

      span {
        font-weight: 700;
        /* identical to box height, or 32px */
      }
    }
  }
`;
