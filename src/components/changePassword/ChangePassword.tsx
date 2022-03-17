import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { IconFacebookLogin } from '@components';
import { AppRoutes } from '@enums';

export const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const history = useHistory();

  const handleSignUp = () => {
    history.push(AppRoutes.SIGN_UP);
  };
  const handleForgotPassword = () => {
    history.push(AppRoutes.FORGOT_PASSWORD);
  };
  const handleChangePassword = () => {
    if (password !== newPassword) {
      setPassword('');
      setNewPassword('');
      alert('Password was successfully changed ');
    } else {
      alert('Old and new passwords cannot be the same ');
    }
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleInputNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  return (
    <StyledLogin>
      <h1>New Password</h1>
      <h2>Create your new password</h2>

      <div className='input'>
        <Input.Password
          placeholder='Password'
          type='password'
          value={password}
          onChange={handleInputPassword}
          iconRender={(visible) =>
            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
          }
        />
      </div>
      <div className='input'>
        <Input.Password
          placeholder='Confirm password'
          type='password'
          value={newPassword}
          onChange={handleInputNewPassword}
          iconRender={(visible) =>
            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
          }
        />
      </div>
      <div className='forgot-password'>
        <p onClick={handleForgotPassword}>Forgot password?</p>
      </div>

      <div className='change-password-button'>
        <Button onClick={handleChangePassword}>
          Change Password
        </Button>
      </div>
      <div className='sign-in-facebook-button'>
        <Button icon={<IconFacebookLogin />}>
          Sign in with Facebook
        </Button>
      </div>

      <p className='sign-up'>
        Don’t have an account?{' '}
        <span onClick={handleSignUp}>Sign up</span>
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

  .change-password-button {
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
