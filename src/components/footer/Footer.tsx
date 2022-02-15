import React from 'react';

import {
  StyledFooterContainer,
  FooterSocial,
  FooterDirectional,
  FooterInformation,
  FooterContact,
  FooterLicense,
} from '@components';

export const Footer = () => {
  return (
    <StyledFooterContainer>
      <div className='footer-content'>
        <FooterSocial />
        <FooterDirectional />
        <FooterInformation />
        <FooterContact />
      </div>
      <FooterLicense />
    </StyledFooterContainer>
  );
};
