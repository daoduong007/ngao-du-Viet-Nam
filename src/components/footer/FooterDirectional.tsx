import React from 'react';
import { StyledFooterDirectional } from '@components';

const footerDirectionalItems = [
  'Home',
  'About',
  'Tours',
  'Hotels',
  'Contact',
];
export const FooterDirectional = () => {
  return (
    <StyledFooterDirectional>
      {footerDirectionalItems.map((item, index) => (
        <p className='directionalItem' key={index}>
          {item}
        </p>
      ))}
    </StyledFooterDirectional>
  );
};
