import React from 'react';
import { generatePath, useHistory } from 'react-router-dom';

import {
  StyledFooterContainer,
  FooterSocial,
  FooterDirectional,
  FooterInformation,
  FooterContact,
  FooterLicense,
} from '@components';
import { AppRoutes } from '@enums';

export const Footer = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push(AppRoutes.PRIVACY_POLICY);
  };
  return (
    <StyledFooterContainer>
      <div className='footer-content'>
        <FooterSocial />
        <FooterDirectional />
        <FooterInformation onClick={handleClick} />
        <FooterContact />
      </div>
      <FooterLicense />
    </StyledFooterContainer>
  );
};
