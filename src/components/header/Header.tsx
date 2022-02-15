import React from 'react';
import {
  StyledContainer,
  BackGroundImage,
  Appbar,
  Search,
  Feature,
  Slogan,
} from '@components';

export const Header = () => {
  return (
    <StyledContainer>
      <BackGroundImage />
      <Appbar />
      <Slogan />
      <Search />
      <Feature />
    </StyledContainer>
  );
};
