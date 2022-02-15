import React from 'react';

import {
  StyledBodyIntroduceContainer,
  StyledBodyIntroduceImageBelow,
  StyledBodyIntroduceImageAbove,
  StyledBodyIntroduceTitle,
  StyledBodyIntroduceContent,
  IconDoubleQuotes,
} from '@components';

export const BodyIntroduce = () => {
  return (
    <StyledBodyIntroduceContainer>
      <div className='body-introduce-image'>
        <StyledBodyIntroduceImageBelow
          src={require('@assets/BodyIntroduce1.png')}
        />
        <StyledBodyIntroduceImageAbove
          src={require('@assets/BodyIntroduce2.png')}
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Purus viverra nuQlla eget sed odio. Vulputate risus
              faucibus sem non, feugiat nec consequat, montes.
              Elementum scelerisque phasellus donec lectus ullamcorper
              faucibus. Malesuada et adipiscing molestie egestas leo
              ut.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Purus viverra nuQlla eget sed odio. Vulputate risus
              faucibus sem non, feugiat nec consequat, montes.{' '}
            </p>
          </div>
        </StyledBodyIntroduceContent>
      </div>
    </StyledBodyIntroduceContainer>
  );
};
