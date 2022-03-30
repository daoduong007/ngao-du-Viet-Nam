import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

import {
  IconDownload,
  DataprivacyPolicy1,
  DataprivacyPolicy2,
  DataprivacyPolicy3,
  DataprivacyPolicy4,
  DataprivacyPolicy5,
  DataprivacyPolicy6,
  DataprivacyPolicy7,
  DataprivacyPolicy8,
  DataprivacyPolicy9,
  DataprivacyPolicy10,
  DataprivacyPolicy11,
  DataprivacyPolicy12,
  DataprivacyPolicy13,
  BreadcrumbLink,
} from '@components';

export const PrivacyPolicyBody = () => {
  const pathUrl = ['Home'].concat(
    window.location.pathname.split('/'),
  );
  return (
    <StyledPrivacyPolicyContainer>
      <BreadcrumbLink pathUrl={pathUrl} />
      <p className='screen-name'>Privacy Policy</p>
      <p>Last Updated: Feb 03, 2020</p>
      <Button icon={<IconDownload />}>Download</Button>
      {DataprivacyPolicy1.map((item, index) => (
        <p key={index} className='italic'>
          {item}
        </p>
      ))}
      {DataprivacyPolicy2.map((item, index) => (
        <p key={index}> {item}</p>
      ))}
      <h1>1. What information do we collect?</h1>
      <p>
        Ojimah receives and stores: a) Information given by You, b)
        information obtained from third parties, c) public
        information, and d) information collected by our systems, as
        described below.
      </p>
      <h2>Information given by You:</h2>
      {DataprivacyPolicy3.map((item, index) => (
        <p key={index}> {item}</p>
      ))}
      <h2>Information given by third parties:</h2>
      {DataprivacyPolicy4.map((item, index) => (
        <p key={index}> {item}</p>
      ))}
      <h2>
        Information collected by our systems. Cookies and web beacons
        policy.
      </h2>
      <p>
        Ojimah automatically collects and stores certain information
        on the activity of its Users. Such information may include the
        source URL (whether they are or not at Ojimah’s Website), what
        URL they often access, what browser they are using and their
        IP addresses. Also visited pages and searches done. In order
        for the Website to work correctly, Ojimah uses cookies of its
        own and from third parties.
      </p>
      <h2>What is a cookie? What are web beacons?</h2>
      {DataprivacyPolicy5.map((item, index) => (
        <p key={index}> {item}</p>
      ))}
      <h2>How are cookies controlled?</h2>
      {DataprivacyPolicy6.map((item, index) => (
        <p key={index}> {item}</p>
      ))}
      <h2>How do we use cookies?</h2>
      {DataprivacyPolicy7.map((item, index) => (
        <p key={index}> {item}</p>
      ))}
      <h1>2. What do we use the information collected for?</h1>
      <p>
        You expressly authorize Ojimah to register and handle your
        Personal Information for these purposes:
      </p>
      <ul>
        {DataprivacyPolicy8.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>
      <p>
        For the purpose of offering better services or providing its
        users with information related to your preferences, Ojimah may
        also develop internal studies on interests, behaviors and
        demography of users, to better understand their needs and
        interests, improve our business and promotional initiatives,
        customize its contents, its presentation and services, show
        advertising or promotions, banners of interest to our users.
        <br />
        Furthermore, Ojimah uses the information of debit or credit
        cards (such as the name of the card holder, card number and
        expiration date) only for the purpose of completing the
        bookings made by You, including sending your data to final
        vendors of services, in order to manage your bookings and/or
        purchase orders. Furthermore, You may choose that Ojimah
        reminds certain data of your card and billing, which will
        automatically appear upon entering Ojimah’s Website and/or
        Application.
      </p>
      <h1>3. Who we share the information collected with?</h1>
      {DataprivacyPolicy9.map((item, index) => (
        <p key={index}> {item}</p>
      ))}
      <h1>
        4. Where do we store and how we protect the information
        collected?
      </h1>
      <p>
        All Personal Information is collected and stored in servers
        physically located in the United Kingdom. Ojimah may relocate
        these servers in any other country, in the future, and may
        store Personal Information in the United Kingdom or in other
        countries, for back-up purposes. You express you unequivocal
        consent so that Ojimah may transfer your data to any country
        worldwide. In any case, Ojimah undertakes to secure the
        compliance of any legally enforceable standards for the
        protection and safekeeping of your Personal Information,
        through the execution of agreements whose purpose is the
        privacy of your personal data. Personal Information shall be
        treated with the degree of legally enforceable protection to
        secure its safety, and avoid its alteration, loss,
        unauthorized treatment or access.
      </p>
      <h2>5.1. Opt-out policy</h2>
      {DataprivacyPolicy10.map((item, index) => (
        <p key={index}> {item}</p>
      ))}
      <h2>5.3. How to exercise the rights described above</h2>
      <p>You may exercise them by any of the options below:</p>
      <ul>
        {DataprivacyPolicy11.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </ul>
      <h1>6. How does Ojimah interact with your social networks?</h1>
      <p>
        Upon registering in Ojimah, Ojimah requests to choose a user
        identification and a password (that is to say, access a
        personal account within the Website). Likewise, Ojimah allows
        you to access “My Account” through your Facebook account,
        Google+ or other social networks (hereafter, the “Social
        Networks” or “Social Network”) that may match access to “My
        Account” in the future. As part of the functionality of the
        Website, and in order to offer a better customized experience,
        you may link your account to Social Networks in two ways:
      </p>
      <ul>
        {DataprivacyPolicy12.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>
      {DataprivacyPolicy13.map((item, index) => (
        <p key={index}> {item}</p>
      ))}
    </StyledPrivacyPolicyContainer>
  );
};

const StyledPrivacyPolicyContainer = styled.div`
  padding: 0 165px;
  margin-top: 55px;
  margin-bottom: 88px;

  text-align: left;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  color: rgba(30, 30, 30, 0.8);
  .screen-name {
    font-weight: 700;
    font-size: 36px;
    line-height: 48px;
    /* identical to box height, or 133% */

    color: #000000;
  }

  .ant-btn {
    background: #ff7b42;
    width: 259px;
    height: 44px;
    margin-bottom: 26px;

    span {
      margin-left: 17px;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      color: #ffffff;
    }
  }
  .ant-btn:hover,
  .ant-btn:focus {
    color: #ff7b42;
    border-color: #ff7b42;
  }
  h1 {
    margin: 32px 0 48px 0;
    font-weight: 700;
    font-size: 28px;
    line-height: 48px;
    /* identical to box height, or 171% */

    color: #1e1e1e;
  }
  h2 {
    margin: 32px 0 12px 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 48px;
    /* identical to box height, or 240% */

    color: #1e1e1e;
  }
  .italic {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  ul {
    margin-bottom: 30px;
  }

  @media (min-width: 1441px) {
    width: 1440px;
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    padding: 0 50px;
  }

  @media (max-width: 900px) {
    padding: 30px;
    margin-top: 40px;
    margin-bottom: 66px;
    font-size: 14px;
    .screen-name {
      font-size: 30px;
    }

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 18px;
    }
  }
  @media (max-width: 768px) {
    padding: 0 20px;
    margin-top: 20px;
    margin-bottom: 33px;
    font-size: 12px;
    .screen-name {
      font-size: 25px;
    }

    h1 {
      margin: 25px 0 35px 0;
      font-size: 20px;
    }

    h2 {
      margin: 25px 0 12px 0;
      font-size: 16px;
    }
  }
`;
