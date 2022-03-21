import React from 'react';
import styled from 'styled-components';

import {
  IconLogo,
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

const StyledFooterSocial = styled.div`
  display: flex;
  flex-direction: column;

  .footer-social-list-icon {
    margin-top: 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .footer-social-icon {
  }
`;
