import React from 'react';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { IconFacebookLogin } from '@components';

export const Login = () => {
  return (
    <StyledLogin>
      <h1>Sign in</h1>
      <h2>Welcome to NgaoduVietnam</h2>
      <div className='input email-input'>
        <Input placeholder='Email Address' />
      </div>
      <div className='input password-input'>
        <Input.Password
          placeholder='Password'
          type='password'
          iconRender={(visible) =>
            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
          }
        />
      </div>
      <div className='forgot-password'>
        <p>Forgot password?</p>
      </div>

      <div className='sign-in-button'>
        <Button>Sign in</Button>
      </div>
      <div className='sign-in-facebook-button'>
        <Button icon={<IconFacebookLogin />}>
          Sign in with Facebook
        </Button>
      </div>

      <p className='sign-up'>
        Don’t have an account? <span>Sign up</span>
      </p>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
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

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .ant-input,
  .ant-input-affix-wrapper {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #636567;

    border: 0;
    border-bottom: 1px solid #c5c7c9;

    padding: 8px 11px;
  }
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-bottom: 1px solid #c5c7c9 !important;
  }
  //remove outline input ant design
  .ant-input-affix-wrapper-focused {
    box-shadow: none !important;
    border-bottom: 1px solid #c5c7c9 !important;
  }
  //remove outline input ant design
  .ant-input:focus,
  textarea:focus {
    box-shadow: none !important;
  }

  .forgot-password {
    display: flex;
    justify-content: right;

    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    color: #636567;

    p {
      cursor: pointer;
    }
  }

  .ant-btn {
    width: 100%;
    height: 56px;

    border-radius: 2px;
  }

  .sign-in-button {
    margin-bottom: 30px;
    .ant-btn {
      background: #ff7b42;
      span {
        font-weight: 700;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */

        color: #ffffff;
      }
    }
  }

  .sign-in-facebook-button {
    margin-bottom: 32px;
    .ant-btn {
      background: #4e86db;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        margin-left: 12px;

        font-weight: 500;
        font-size: 14px;
        line-height: 18px;

        color: #ffffff;
      }
    }
  }

  .sign-up {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #686868;
    span {
      cursor: pointer;
      color: #ff7b42;
    }
  }
`;
