import React from 'react';

import {
  StyledTourDetailHeaderContainer,
  StyledLogo,
  IconLogo,
  Directional,
} from '@components';

export const TourDetailHeader = () => {
  return (
    <StyledTourDetailHeaderContainer>
      <StyledLogo>
        <IconLogo color={'#1C1C1E'} />
      </StyledLogo>
      <Directional />
    </StyledTourDetailHeaderContainer>
  );
};
