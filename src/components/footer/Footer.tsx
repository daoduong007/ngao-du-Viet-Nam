import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  StyledFooterContainer,
  FooterSocial,
  FooterDirectional,
  FooterInformation,
  FooterContact,
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
        <div className='footer-social'>
          <FooterSocial />
        </div>

        <div className='footer-diretional-infomation-contact'>
          <div className='footer-directional'>
            <FooterDirectional />
          </div>
          <div className='footer-infomation'>
            <FooterInformation onClick={handleClick} />
          </div>
          <div className='social-contact'>
            <FooterContact />
          </div>
        </div>
      </div>
      <div className='footer-coppyright'>
        <p>Copyright © We.travel. All rights reserved</p>
      </div>
    </StyledFooterContainer>
  );
};
