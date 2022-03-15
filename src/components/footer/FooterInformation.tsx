import React from 'react';
import { StyledFooterInformation } from '@components';

interface IPrivacyPolicy {
  onClick: () => void;
}
export const FooterInformation = (props: IPrivacyPolicy) => {
  const { onClick } = props;
  return (
    <StyledFooterInformation>
      <p>Partner with us Guest Policy</p>
      <p>Terms & Conditions</p>
      <div onClick={() => onClick()}>
        <p>Privacy Policy</p>
      </div>

      <p>Guest Policy</p>
    </StyledFooterInformation>
  );
};
