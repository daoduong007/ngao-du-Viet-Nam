import React from 'react';

import {
  StyledBodyContainer,
  BodyIntroduce,
  BodyAttractiveTour,
  BodyExperienceCultural,
  BodyDiscoverDestinations,
} from '@components';

export const Body = () => {
  return (
    <StyledBodyContainer>
      <BodyIntroduce />
      <BodyDiscoverDestinations />
      <BodyAttractiveTour />
      <BodyExperienceCultural />
    </StyledBodyContainer>
  );
};
