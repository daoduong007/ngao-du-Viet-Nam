import React from 'react';
import { Button, Input } from 'antd';
import { useHistory } from 'react-router-dom';

import {
  StyledTourDetailBookingForm,
  IconDepatureTime,
  IconPeople,
} from '@components';
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
