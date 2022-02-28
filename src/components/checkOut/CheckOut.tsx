import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';

import {
  IconLocation,
  IconDepatureTime,
  IconGuest,
} from '@components';

export const CheckOut = () => {
  return (
    <StyledCheckOutContainer>
      <div className='check-out-header'>
        <p>Booking Submission</p>
      </div>

      <div className='check-out-body'>
        <div className='check-out-traveler-details'>
          <hr />
          traveler detail
        </div>
        <div className='check-out-total-form'>
          <div className='total-form-title'>
            <p>
              Discover interesting things in the romantic coastal city
              of Vungtau
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
          <div>
            <Input
              prefix={<IconGuest />}
              placeholder='2 Adults - 1 Children'
            />
          </div>
          <div>
            <Input
              prefix={<IconDepatureTime />}
              placeholder='25/02/2021 - 28/02/2021'
            />
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
        </div>
      </div>
    </StyledCheckOutContainer>
  );
};

const StyledCheckOutContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 165px;
  display: flex;
  flex-direction: column;
  overflow: visible;

  hr {
    margin: 0;
    border: 0px;
    opacity: 0.7;
    border-bottom: 1px solid #e5e5e5;
  }
  .check-out-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .check-out-traveler-details {
    width: 635px;
  }
  .check-out-total-form {
    width: 380px;
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
          /* identical to box height, or 171% */
          /* tieu de */
          color: #1c1c1e;
        }
      }
    }
    .ant-input-affix-wrapper {
      height: 64px;
      margin-top: 20px;
      svg {
        margin-right: 17.5px;
        margin-left: 26px;
      }
    }
    .total-form-group-promo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 12px;
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
  }
`;
