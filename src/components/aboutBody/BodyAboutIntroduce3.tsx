import React from 'react';

import {
  StyledBodyAboutIntroduceContainer3,
  StyledBodyIntroduceTitle,
  StyledBodyAboutIntroduceContent,
  p1,
  p3,
} from '@components';

export const BodyAboutIntroduce3 = () => {
  return (
    <StyledBodyAboutIntroduceContainer3>
      <div>
        <img src='/assets/BodyIntroduce4.png' />
      </div>
      <div className='body-about-introduce-title'>
        <StyledBodyIntroduceTitle>
          <p>
            Experience the traditional cultural beauties of Vietnam
          </p>
        </StyledBodyIntroduceTitle>
      </div>

      <div className='body-about-introduce-content'>
        <StyledBodyAboutIntroduceContent>
          <p>{p1}</p>
        </StyledBodyAboutIntroduceContent>
        <StyledBodyAboutIntroduceContent>
          <p>{p3}</p>
        </StyledBodyAboutIntroduceContent>
      </div>
    </StyledBodyAboutIntroduceContainer3>
  );
};
