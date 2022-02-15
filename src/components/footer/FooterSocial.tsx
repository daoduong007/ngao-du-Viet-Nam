import React from 'react';
import {
  IconLogo,
  StyledFooterSocial,
  IconFacebook,
  IconInstagram,
  IconTwitter,
} from '@components';

export const FooterSocial = () => {
  return (
    <StyledFooterSocial>
      <div className='footer-logo'>
        <IconLogo />
      </div>
      <div className='footer-social-list-icon'>
        <div className='footer-social-icon'>
          <IconFacebook />
        </div>
        <div className='footer-social-icon'>
          <IconInstagram />
        </div>
        <div className='footer-social-icon'>
          <IconTwitter />
        </div>
      </div>
    </StyledFooterSocial>
  );
};
