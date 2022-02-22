import React from 'react';
import {
  StyledHeaderContainer,
  BackGroundImage,
  Appbar,
  Search,
  Feature,
  Slogan,
} from '@components';

export const HeaderHome = () => {
  return (
    <StyledHeaderContainer>
      <BackGroundImage />
      <Appbar />
      <Slogan />
      <Search />
      <Feature />
    </StyledHeaderContainer>
  );
};
