import React from 'react';

import {
  StyledBodyAboutIntroduceContainer4,
  StyledBodyAboutIntroduceContent,
  p1,
} from '@components';

export const BodyAboutIntroduce4 = () => {
  return (
    <StyledBodyAboutIntroduceContainer4>
      <div>
        <img src='/assets/BodyIntroduce5.png' />
      </div>
      <div className='body-about-introduce'>
        <StyledBodyAboutIntroduceContent>
          <p>{p1}</p>
        </StyledBodyAboutIntroduceContent>
        <div>
          <img src='/assets/BodyIntroduce6.png' />
        </div>
      </div>
    </StyledBodyAboutIntroduceContainer4>
  );
};
