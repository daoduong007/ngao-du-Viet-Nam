import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link key={index} to={`/${item}`}>
          <StyledText className='directionalItem'>{item}</StyledText>
        </Link>
      ))}
    </StyledDirectional>
  );
};
