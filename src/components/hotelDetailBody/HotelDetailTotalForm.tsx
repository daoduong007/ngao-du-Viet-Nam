import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, DatePicker, Input, Checkbox } from 'antd';

import { IconDepatureTime, IconGuest } from '@components';

export const HotelDetailTotalForm = () => {
  const { RangePicker } = DatePicker;
  const [standardRoom, setStandardRoom] = useState(1);
  const [familySuite, setFamilySuite] = useState(0);
  const [breackfast, setBreackfast] = useState(1);
  const [extraBed, setExtraBed] = useState(0);

  const handleStandardRoomIncrease = () => {
    setStandardRoom((prev) => prev + 1);
  };
  const handleStandardRoomDecrease = () => {
    if (standardRoom >= 1) {
      setStandardRoom((prev) => prev - 1);
    }
  };
  const handlefamilySuiteIncrease = () => {
    setFamilySuite((prev) => prev + 1);
  };
  const handlefamilySuiteDecrease = () => {
    if (familySuite >= 1) {
      setFamilySuite((prev) => prev - 1);
    }
  };
  const handleBreackfastIncrease = () => {
    setBreackfast((prev) => prev + 1);
  };
  const handleBreackfastDecrease = () => {
    if (breackfast >= 1) {
      setBreackfast((prev) => prev - 1);
    }
  };
  const handleExtraBedIncrease = () => {
    setExtraBed((prev) => prev + 1);
  };
  const handleExtraBedDecrease = () => {
    if (extraBed >= 1) {
      setExtraBed((prev) => prev - 1);
    }
  };
  return (
    <StyledHotelDetailTotalForm>
      <div className='hotel-detail-total-form-header'>
        <p>
          from <span>$234.00</span>
        </p>
      </div>
      <hr />
      <div className='hotel-detail-total-form-body'>
        <div className='total-form-body-pick-date-and-people'>
          <div className='total-form-body-pick-date'>
            <IconDepatureTime color={'#FF7B42'} />
            <RangePicker
              placeholder={['Start', 'End']}
              suffixIcon={null}
              bordered={false}
            />
          </div>
          <div className='total-form-body-pick-people '>
            <Input
              size='large'
              // placeholder='2 Adults - 1 Children'
              defaultValue='2 Adults - 1 Children'
              prefix={<IconGuest color={'#FF7B42'} />}
              bordered={false}
            />
          </div>
        </div>
        <div className='total-form-body-pick-room'>
          <div className='total-form-body-pick-room-item'>
            <div className='type-of-room'>
              <p>Standard Room</p>
            </div>

            <div className='number-of-room'>
              <StyledMinusPlus onClick={handleStandardRoomDecrease}>
                -
              </StyledMinusPlus>
              <p>{standardRoom}</p>
              <StyledMinusPlus onClick={handleStandardRoomIncrease}>
                +
              </StyledMinusPlus>
            </div>
            <p>$240.00</p>
          </div>
          <div className='total-form-body-pick-room-item'>
            <div className='type-of-room'>
              <p>Family Suite</p>
            </div>

            <div className='number-of-room'>
              <StyledMinusPlus onClick={handlefamilySuiteDecrease}>
                -
              </StyledMinusPlus>
              <p>{familySuite}</p>
              <StyledMinusPlus onClick={handlefamilySuiteIncrease}>
                +
              </StyledMinusPlus>
            </div>

            <p>$240.00</p>
          </div>
        </div>
        <hr />
        <div className='total-form-body-add-ons-title'>
          <p>Add-ons:</p>
        </div>
        <div className='total-form-body-pick-add-ons'>
          <div className='total-form-body-pick-room-item'>
            <div className='type-of-room'>
              <div className='type-of-room-checkbox'>
                <Checkbox />
              </div>

              <p>Breakfast</p>
            </div>
            <div className='number-of-room'>
              <StyledMinusPlus onClick={handleBreackfastDecrease}>
                -
              </StyledMinusPlus>
              <p>{breackfast}</p>
              <StyledMinusPlus onClick={handleBreackfastIncrease}>
                +
              </StyledMinusPlus>
            </div>

            <p>$240.00</p>
          </div>
          <div className='total-form-body-pick-room-item'>
            <div className='type-of-room'>
              <div className='type-of-room-checkbox'>
                <Checkbox />
              </div>
              <p>Extra Bed</p>
            </div>
            <div className='number-of-room'>
              <StyledMinusPlus onClick={handleExtraBedDecrease}>
                -
              </StyledMinusPlus>
              <p>{extraBed}</p>
              <StyledMinusPlus onClick={handleExtraBedIncrease}>
                +
              </StyledMinusPlus>
            </div>

            <p>$240.00</p>
          </div>
        </div>
        <hr />
        <div className='total-form-body-total-money'>
          <p>Total</p>
          <p>
            <span>$450.00</span>
          </p>
        </div>
        <div className='total-form-body-submit'>
          <Button>Book now</Button>
        </div>
      </div>
    </StyledHotelDetailTotalForm>
  );
};

const StyledHotelDetailTotalForm = styled.div`
  width: 380px;
  height: 693px;

  background: #f4f4f4;
  hr {
    margin: 0;
    border: 0;
    border-bottom: 0.5px solid #888888;
  }

  p {
    margin: 0;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    /* noi dung */
    color: #3d3e3f;

    span {
      font-weight: 600;
      font-size: 20px;
      line-height: 160%;
    }
    text-align: left;
  }

  .hotel-detail-total-form-header {
    margin: 0px 25px 0px 30px;
    padding: 30px 0 24px 0;
  }

  .hotel-detail-total-form-body {
    margin: 26px 25px 0 30px;
  }
  .total-form-body-pick-date-and-people {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    /* or 22px */

    /* tieu de */

    color: #1c1c1e;

    .total-form-body-pick-date {
      height: 64px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      background-color: #ffffff;
      svg {
        margin-left: 23px;
      }
      .ant-picker-range .ant-picker-active-bar {
        display: none;
      }
      .anticon {
        display: none;
      }
    }
    .total-form-body-pick-people {
      height: 64px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      background-color: #ffffff;
      .ant-input-affix-wrapper {
        padding-left: 23px;
      }
    }
  }

  .total-form-body-pick-room-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 18px;

    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      /* text tieu de */
      color: #2a2a2a;
    }
    .type-of-room {
      width: 120px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        width: 100%;
      }
    }
    .type-of-room-checkbox {
      margin-right: 16px;
    }
    .number-of-room {
      width: 80px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .total-form-body-add-ons-title {
    margin: 16px 0px;
    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 42px;
      /* identical to box height, or 262% */

      /* text tieu de */

      color: #2a2a2a;
    }
  }
  .total-form-body-pick-add-ons {
  }
  .total-form-body-total-money {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 16px 0 28px 0;
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 160%;
      /* identical to box height, or 32px */

      /* tieu de */

      color: #1c1c1e;

      span {
        font-weight: 700;
      }
    }
  }
  .total-form-body-submit {
    button {
      width: 100%;
      height: 64px;
      background-color: #ff7b42;
      border-radius: 0;
      border: 1px solid #ff7b42;

      span {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */

        color: #ffffff;
      }
    }
  }
`;

const StyledMinusPlus = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #e4e4e4;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* text tieu de */

  color: #2a2a2a;

  cursor: pointer;
  &:active {
    box-shadow: 10px #6d6c6c;
    border: 2px solid #e4e4e4;
  }
`;
