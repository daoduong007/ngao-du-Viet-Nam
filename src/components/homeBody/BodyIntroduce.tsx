import React from 'react';

import {
  StyledBodyIntroduceContainer,
  StyledBodyIntroduceImageBelow,
  StyledBodyIntroduceImageAbove,
  StyledBodyIntroduceTitle,
  StyledBodyIntroduceContent,
  IconDoubleQuotes,
  p1,
  p2,
} from '@components';

export const BodyIntroduce = () => {
  return (
    <StyledBodyIntroduceContainer>
      <div className='body-introduce-image'>
        <StyledBodyIntroduceImageBelow
          src={'/assets/BodyIntroduce1.png'}
        />
        <StyledBodyIntroduceImageAbove
          src={'/assets/BodyIntroduce2.png'}
        />
      </div>
      <div className='body-introduce-document'>
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
        <StyledBodyIntroduceContent>
          <div>
            <IconDoubleQuotes />
          </div>
          <div>
            <p>{p1}</p>
            <br />
            <p>{p2}</p>
          </div>
        </StyledBodyIntroduceContent>
      </div>
    </StyledBodyIntroduceContainer>
  );
};
