import React from 'react';

import { StyledText, StyledDirectional } from '@components';

const directionalItems = [
  'Home',
  'About',
  'Tours',
  'Hotels',
  'Contact',
  'Login',
];
export const Directional = () => {
  return (
    <StyledDirectional>
      {directionalItems.map((item, index) => (
        <StyledText className='directionalItem' key={index}>
          {item}
        </StyledText>
      ))}
    </StyledDirectional>
  );
};
