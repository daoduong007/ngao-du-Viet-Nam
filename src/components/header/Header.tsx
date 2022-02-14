import React from 'react';
import { StyledContainer } from '@components';
import { BackGroundImage } from '@components';
import { Appbar } from '@components';
import { Search } from '@components';
import { Feature } from '@components';
import { Slogan } from '@components';

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
