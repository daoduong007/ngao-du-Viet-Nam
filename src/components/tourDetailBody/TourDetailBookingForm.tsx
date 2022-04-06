import React from 'react';
import { Button, DatePicker, Input } from 'antd';
import styled from 'styled-components';

import { IconDepatureTime, IconPeople } from '@components';

interface IBookingForm {
  duration: string;
  price: number;
  onClick: (event: any) => void;
}

export const TourDetailBookingForm = (props: IBookingForm) => {
  const { RangePicker } = DatePicker;
  const { price, duration, onClick } = props;

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
          />
        </div>
        <div className='booking-form-input-people'>
          <Input
            prefix={<IconPeople />}
            defaultValue={'2 Adults - 1 Children'}
          />
        </div>
      </div>
      <div className='booking-form-total'>
        <p>Total: </p>
        <p>
          <span>$ {price}</span>
        </p>
      </div>
      <div className='booking-form-submit'>
        <Button type='primary' onClick={onClick}>
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
      display: flex;
      svg {
        margin: 0 8px 0 10px;
      }
    }
    .ant-input-affix-wrapper {
      border: 0;
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
