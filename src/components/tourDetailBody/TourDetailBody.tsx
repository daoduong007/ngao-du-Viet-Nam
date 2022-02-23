import React from 'react';

import { StyledTourDetailBodyContainer, IconDot } from '@components';

export const TourDetailBody = () => {
  return (
    <StyledTourDetailBodyContainer>
      <hr className='tour-detail-divider' />
      <div className='listtour-body-screenname'>
        <p>Home</p>
        <div>
          <IconDot width={4} height={4} color={'#C4C4C4'} />
        </div>
        <p>Tours</p>
      </div>
      <div></div>
    </StyledTourDetailBodyContainer>
  );
};
