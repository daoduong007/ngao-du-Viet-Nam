import React, { useState } from 'react';
import { Button, DatePicker, InputNumber, Popover } from 'antd';
import styled from 'styled-components';
import moment from 'moment';

import { IconDepatureTime, IconPeople } from '@components';

interface IBookingForm {
  duration: string;
  price: number;
  onClick: (
    numberAdults,
    numberChildren,
    timeTour,
    timeTourString,
  ) => void;
}

export const TourDetailBookingForm = (props: IBookingForm) => {
  const { RangePicker } = DatePicker;
  const { price, duration, onClick } = props;

  const [numberAdults, setNumberAdults] = useState<number>(2);
  const [numberChildren, setNumberChildren] = useState<number>(0);
  const [timeTour, setTimeTour] = useState<null | [any, any]>([
    '',
    '',
  ]);
  const [timeTourString, setTimeTourString] = useState<
    null | [any, any]
  >(['', '']);

  const dateFormat = 'DD/MM/YYYY';

  return (
    <StyledTourDetailBookingForm>
      <div className='booking-form-price'>
        <p>
          from <span> $ {price}</span>
        </p>
      </div>
      <hr />
      <div className='booking-form-description'>
        <div className='booking-form-description-duration'>
          <p>Duration :</p>
          <p>
            <span>{duration}</span>
          </p>
        </div>
        <div className='booking-form-description-type'>
          <p>Tour Type :</p>
          <p>
            <span>Sun -Beach</span>
          </p>
        </div>
      </div>
      <div className='booking-form-input'>
        <div className='booking-form-input-time'>
          <IconDepatureTime color={'#FF7B42'} />
          <RangePicker
            placeholder={['Start', 'End']}
            suffixIcon={null}
            bordered={false}
            format={dateFormat}
            //prevent select days before today and today
            disabledDate={(current) => {
              return current && current < moment().endOf('day');
            }}
            value={timeTour}
            onChange={(dates, dateStrings) => {
              console.log(dateStrings);
              setTimeTourString(dateStrings);
              console.log(dates);
              setTimeTour(dates);
            }}
          />
        </div>

        <Popover
          content={
            <div
              className='popover-content'
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <p style={{ margin: 0, marginRight: '5px' }}>
                  Adults :
                </p>
                <InputNumber
                  min={0}
                  max={20}
                  defaultValue={2}
                  bordered={false}
                  autoFocus={true}
                  value={numberAdults}
                  onChange={(value) => {
                    setNumberAdults(value);
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <p style={{ margin: 0, marginRight: '5px' }}>
                  Children :
                </p>
                <InputNumber
                  min={0}
                  max={20}
                  defaultValue={0}
                  bordered={false}
                  value={numberChildren}
                  onChange={(value) => {
                    setNumberChildren(value);
                  }}
                />
              </div>
            </div>
          }
          trigger='click'
          overlayInnerStyle={{
            width: '100%',
          }}
          overlayStyle={{
            padding: '0px',
            fontFamily: 'DM Sans',
            fontSize: '0.95rem',
          }}
        >
          <div className='booking-form-input-people'>
            <IconPeople />
            <p>
              {numberAdults} Adults - {numberChildren} Children
            </p>
          </div>
        </Popover>
      </div>
      <div className='booking-form-total'>
        <p>Total: </p>
        <p>
          <span>$ {price}</span>
        </p>
      </div>
      <div className='booking-form-submit'>
        <Button
          type='primary'
          onClick={() => {
            onClick(
              numberAdults,
              numberChildren,
              timeTour,
              timeTourString,
            );
          }}
        >
          Book now
        </Button>
      </div>
    </StyledTourDetailBookingForm>
  );
};

const StyledTourDetailBookingForm = styled.div`
  width: 100%;
  height: 500px;
  padding: 0 25px 0 30px;
  background-color: #f4f4f4;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }

  hr {
    border: 0;
    border-bottom: 1px solid #c5c7c9;
    margin: 0 -25px 23px -30px;
  }

  .booking-form-price {
    height: 86px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      margin-bottom: 0px;

      line-height: 160%;
      /* or 22px */
      /* noi dung */
      color: #3d3e3f;
      span {
        margin-left: 8px;

        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        /* identical to box height, or 32px */
        text-align: right;
        /* noi dung */
        color: #3d3e3f;
      }
    }
  }

  .booking-form-description {
    width: 255px;
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: space-between;

    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      /* identical to box height, or 171% */
      /* tieu de */
      color: #1c1c1e;
    }

    p {
      font-size: 14px;
      line-height: 24px;
      /* identical to box height, or 171% */
      /* subcolor 1 */
      color: #636567;
    }
  }

  .booking-form-input {
    .ant-input-affix-wrapper-focused {
      box-shadow: none !important;
    }

    .booking-form-input-time {
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
    .booking-form-input-people {
      height: 64px;
      margin-bottom: 18px;
      padding: 21px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 13px;
      }

      p {
        margin: 0;

        font-weight: 400;
        font-size: 14px;
        line-height: 160%;

        color: #1c1c1e;
      }

      background-color: #ffffff;
    }
  }

  .booking-form-total {
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      font-size: 20px;
      line-height: 160%;
      /* identical to box height, or 32px */
      /* tieu de */
      color: #1c1c1e;
    }
    span {
      font-weight: bold;
      font-size: 20px;
      line-height: 160%;
      /* identical to box height, or 32px */
      text-align: right;
      /* tieu de */
      color: #1c1c1e;
    }
  }

  .booking-form-submit {
    margin-top: 0px;
    width: 100%;
    height: 64px;

    .ant-btn-primary {
      width: 100%;
      height: 100%;
      color: #ffffff;
      border-color: #ff7b42;
      background: #ff7b42;
    }

    span {
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      color: #ffffff;
    }
  }
`;
