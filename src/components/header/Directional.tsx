import React from 'react';
import { StyledText, StyledDirectional } from '@components';

export const Directional = () => {
  return (
    <StyledDirectional>
      <StyledText className='directionalItem'>Home</StyledText>
      <StyledText className='directionalItem'>About</StyledText>
      <StyledText className='directionalItem'>Tours</StyledText>
      <StyledText className='directionalItem'>Hotels</StyledText>
      <StyledText className='directionalItem'>Contact</StyledText>
      <StyledText className='directionalItem'> Login</StyledText>
    </StyledDirectional>
  );
};
