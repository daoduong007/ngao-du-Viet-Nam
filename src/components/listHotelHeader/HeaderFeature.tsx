import React from 'react';

import { IconDot } from '@components';

export const HeaderFeature = () => {
  return (
    <div className='header-feature'>
      <div className='header-feature-title'>
        <IconDot />
        <p>Feature</p>
      </div>
      <div className='header-feature-content'>
        <div className='header-feature-content-item'>
          <p>200+</p>
          <p>tours</p>
        </div>
        <div className='FeatureBodyItem'>
          <p>100+</p>
          <p>destination</p>
        </div>
        <div className='FeatureBodyItem'>
          <p>8+</p>
          <p>type of tour</p>
        </div>
      </div>
    </div>
  );
};
