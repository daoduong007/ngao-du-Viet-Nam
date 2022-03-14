import React from 'react';
import { Input, Button } from 'antd';

import {
  StyledCheckOutTalFormContainer,
  IconLocation,
  IconDepatureTime,
  IconGuest,
} from '@components';

export const TourCheckOutTotalForm = () => {
  return (
    <StyledCheckOutTalFormContainer>
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
    </StyledCheckOutTalFormContainer>
  );
};
