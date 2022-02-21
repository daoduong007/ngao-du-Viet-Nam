import React from 'react';

import {
  StyledBodyAboutContainer,
  BodyIntroduce,
  BodyAboutIntroduce2,
  BodyAboutIntroduce3,
  BodyAboutIntroduce4,
} from '@components';

export const BodyAbout = () => {
  return (
    <StyledBodyAboutContainer>
      <BodyIntroduce />
      <BodyAboutIntroduce2 />
      <BodyAboutIntroduce3 />
      <BodyAboutIntroduce4 />
    </StyledBodyAboutContainer>
  );
};
