import React from 'react';
import { Button, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { IconDepatureTime, IconPeople } from '@components';
import { ITourBooking } from '@interfaces';
import { AppRoutes } from '@enums';

export const TourDetailBookingForm = (props: ITourBooking) => {
  const { duration, price } = props;
  const history = useHistory();

  const handleBooking = () => {
    history.push(AppRoutes.CHECK_OUT);
  };

  return (
    <StyledTourDetailBookingForm>
      <div className='booking-form-price'>
        <p>
          from <span>{price}</span>
        </p>
      </div>
      <hr className='booking-form-divider' />
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
          <Input
            prefix={<IconDepatureTime />}
            defaultValue={'24/02/2022 - 26/02/2022'}
          />
        </div>
        <div className='booking-form-input-people'>
          <Input
            prefix={<IconPeople />}
            defaultValue={'24/02/2022 - 26/02/2022'}
          />
        </div>
      </div>
      <div className='booking-form-total'>
        <p>Total: </p>
        <p>
          <span>{price}</span>
        </p>
      </div>
      <div className='booking-form-submit'>
        <Button type='primary' onClick={handleBooking}>
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

  .booking-form-divider {
    margin: 0px;
    width: 100%;
    border: 1px solid #c5c7c9;
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

  .booking-form-input > div {
    height: 64px;
    margin-bottom: 18px;
  }
  .booking-form-input {
    .booking-form-input-time {
      display: flex;
    }
    .booking-form-input-people {
      display: flex;
    }
    svg {
      margin-right: 17.5px;
      margin-left: 26px;
    }
    .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
      border-color: #ff7b42;
    }
    .ant-input-affix-wrapper {
      border: 1px solid #ffffff;
    }
  }

  .booking-form-total {
    margin-bottom: 37px;
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
