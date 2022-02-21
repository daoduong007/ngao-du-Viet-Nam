import React from 'react';

import {
  StyledBodyAboutIntroduceContainer2,
  StyledBodyIntroduceTitle,
  StyledBodyAboutIntroduceContent,
  p1,
  p2,
} from '@components';

export const BodyAboutIntroduce2 = () => {
  return (
    <StyledBodyAboutIntroduceContainer2>
      <div className='body-about-introduce'>
        <StyledBodyIntroduceTitle>
          <p>
            With{' '}
            <span className='introduce-title-title-color'>
              NgaoduVietnam
            </span>
            , immerses you in majestic space and unique cultural
            features
          </p>
        </StyledBodyIntroduceTitle>
        <StyledBodyAboutIntroduceContent>
          <p>{p1}</p>
          <br />
          <p>{p2}</p>
        </StyledBodyAboutIntroduceContent>
      </div>
      <div className='body-about-introduce-img'>
        <img src='/assets/BodyIntroduce3.png' />
      </div>
    </StyledBodyAboutIntroduceContainer2>
  );
};
