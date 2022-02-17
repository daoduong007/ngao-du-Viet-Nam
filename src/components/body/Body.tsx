import React from 'react';

import {
  StyledBodyContainer,
  BodyIntroduce,
  BodyAttractiveTour,
  BodyExperienceCultural,
} from '@components';

export const Body = () => {
  return (
    <StyledBodyContainer>
      <BodyIntroduce />
      <BodyAttractiveTour />
      <BodyExperienceCultural />
    </StyledBodyContainer>
  );
};
