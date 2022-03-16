import React from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { IconFacebookLogin } from '@components';
import { AppRoutes } from '@enums';

export const SignUp = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push(AppRoutes.LOGIN);
  };
  return (
    <StyledSignUp>
      <h1>Register</h1>
      <h2>Welcome to NgaoduVietnam</h2>
      <div className='input name-input'>
        <Input placeholder='First Name' />
        <Input placeholder='Last Name' />
      </div>
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
      <div className='sign-in-button'>
        <Button>Sign up</Button>
      </div>
      <div className='sign-in-facebook-button'>
        <Button icon={<IconFacebookLogin />}>
          Sign in with Facebook
        </Button>
      </div>

      <p className='sign-up'>
        Member already? <span onClick={handleLogin}>Log in</span>
      </p>
    </StyledSignUp>
  );
};
const StyledSignUp = styled.div`
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
  .name-input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .ant-input {
      width: 45%;
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
      &:focus,
      &:hover {
        box-shadow: 2px #ff7b42;
        border: 1px solid #ff7b42;
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
      &:focus,
      &:hover {
        box-shadow: 2px #4e86db;
        border: 1px solid #4e86db;
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
