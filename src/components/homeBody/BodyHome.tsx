import React from 'react';

import {
  StyledBodyContainer,
  BodyIntroduce,
  BodyAttractiveTour,
  BodyExperienceCultural,
  BodyDiscoverDestinations,
  BodySubscribeMail,
} from '@components';

export const BodyHome = () => {
  return (
    <StyledBodyContainer>
      <BodyIntroduce />
      <BodyDiscoverDestinations />
      <BodyAttractiveTour />
      <BodyExperienceCultural />
      <BodySubscribeMail />
    </StyledBodyContainer>
  );
};
