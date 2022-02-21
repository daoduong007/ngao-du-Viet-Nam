import React from 'react';

import {
  StyledBodyAboutContainer,
  BodyAboutIntroduce1,
  BodyAboutIntroduce2,
  BodyAboutIntroduce3,
  BodyAboutIntroduce4,
} from '@components';

export const BodyAbout = () => {
  return (
    <StyledBodyAboutContainer>
      <BodyAboutIntroduce1 />
      <BodyAboutIntroduce2 />
      <BodyAboutIntroduce3 />
      <BodyAboutIntroduce4 />
    </StyledBodyAboutContainer>
  );
};
