import React from 'react';

import { Appbar, StyledHeaderAbout } from '@components';

export const HeaderAbout = () => {
  return (
    <StyledHeaderAbout>
      <img src={'/assets/bannerAbout.png'} />
      <Appbar />
      <div className='about-header-title'>
        <p>About us</p>
      </div>
    </StyledHeaderAbout>
  );
};
