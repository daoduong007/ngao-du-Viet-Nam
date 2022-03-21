import React from 'react';
import styled from 'styled-components';

interface IPrivacyPolicy {
  onClick: () => void;
}
export const FooterInformation = (props: IPrivacyPolicy) => {
  const { onClick } = props;
  return (
    <StyledFooterInformation>
      <p>Partner with us</p>
      <p>Terms & Conditions</p>
      <p onClick={() => onClick()}>Privacy Policy</p>
      <p>Guest Policy</p>
    </StyledFooterInformation>
  );
};
const StyledFooterInformation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: top;
  p {
    margin: 0;
    margin-bottom: 52px;

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    /* or 52px */

    color: #ffffff;

    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: left;
    p {
      width: 40%;
      margin: 0;
      margin-right: 10%;
    }
  }

  @media (max-width: 600px) {
    justify-content: space-between;
    p {
      width: 50%;
      margin: 0;
      font-size: 10px;
    }
  }
`;
