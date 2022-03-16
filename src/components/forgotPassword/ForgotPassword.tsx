/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button, Input } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { AppRoutes } from '@enums';

export const ForgotPassword = () => {
  const history = useHistory();
  const handleBackLogin = () => {
    history.push(AppRoutes.LOGIN);
  };

  return (
    <StyledForgotPassword>
      <h1>Forgot Password</h1>
      <h2>
        Enter the e-mail address associated with the account. We'll
        e-mail a link to reset your password.
      </h2>
      <div className='input'>
        <Input placeholder='Email Address' />
      </div>
      <div className='send-request-button'>
        <Button>Send Request</Button>
      </div>
      <div className='back-to-sign-in-button'>
        <Button onClick={handleBackLogin}>Back to sign in</Button>
      </div>
    </StyledForgotPassword>
  );
};
const StyledForgotPassword = styled.div`
  width: 100%;
  text-align: left;

  font-family: 'DM Sans';
  font-style: normal;

  h1 {
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;

    color: #1c1c1e;
  }

  h2 {
    margin-bottom: 55px;

    font-weight: 400;
    font-size: 18px;
    line-height: 120%;

    color: #3d3e3f;
  }
  .input {
    margin-bottom: 28px;
  }
  .ant-input {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #636567;

    border: 0;
    border-bottom: 1px solid #c5c7c9;

    padding: 8px 11px;
  }

  //remove outline input ant design
  .ant-input:focus,
  textarea:focus {
    box-shadow: none !important;
  }

  .ant-btn {
    width: 100%;
    height: 56px;

    border-radius: 2px;
    border: 1px solid #ff7b42;
    span {
      font-weight: 700;
      font-size: 14px;
      line-height: 160%;
    }

    &:focus,
    &:hover {
      box-shadow: 2px #ff7b42;
      border: 1px solid #ff7b42;
    }
  }

  .send-request-button {
    margin-bottom: 30px;
    .ant-btn {
      background: #ff7b42;

      /* or 22px */
      span {
        color: #ffffff;
      }
    }
  }
  .back-to-sign-in-button {
    margin-bottom: 30px;
    .ant-btn {
      background-color: #ffffff;
    }
    span {
      color: #ff7b42;
    }
  }
`;
