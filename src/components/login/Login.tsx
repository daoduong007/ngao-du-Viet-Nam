import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IconFacebookLogin } from '@components';
import { AppRoutes } from '@enums';
import { loginApi } from '@api';
import { validationSchemaLogin } from '@utils';
import { getUser } from '@redux';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const user = useSelector((state: any) => state.signUp);

  //prevent users from returning to login page after successful login
  useLayoutEffect(() => {
    const currentAccessToken = localStorage.getItem('accessToken');
    if (currentAccessToken !== null) {
      history.push(AppRoutes.HOME_SCREEN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Auto-fill form after successful sign up
  useEffect(() => {
    if (user.email !== '') {
      setEmail(user.email);
      setPassword(user.password);
    }
  }, [user]);

  const handleSignUp = () => {
    history.push(AppRoutes.SIGN_UP);
  };
  const handleForgotPassword = () => {
    history.push(AppRoutes.FORGOT_PASSWORD);
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitSuccess = (accessToken) => {
    notifyLoginSuccess();
    localStorage.setItem('accessToken', accessToken);

    history.push(AppRoutes.HOME_SCREEN);

    setLoading(false);
    setEmail('');
    setPassword('');
  };

  const handleSubmitLogin = async () => {
    const idValid = await validationSchemaLogin.isValid({
      email,
      password,
    });

    if (idValid) {
      setLoading(true);
      setErrorMessage('');
      const login = async () => {
        const params = {
          email: email,
          password: password,
        };
        const response = await loginApi.postLogin(params);
        dispatch(getUser(params));
        console.log(response);
        if (response.data.accessToken) {
          console.log('login success');
          handleSubmitSuccess(response.data.accessToken);
        } else {
          console.log('login fail');
          setLoading(false);
          notifyLoginFail();
        }
      };

      login();
    } else {
      setErrorMessage('Incorrect email or password');
    }
  };

  const notifyLoginFail = () =>
    toast.error('Incorrect email or password');
  const notifyLoginSuccess = () => toast.success('login success');
  return (
    <StyledLogin>
      <h1>Sign in</h1>
      <h2>Welcome to NgaoduVietnam</h2>
      <div className='input email-input'>
        <Input
          placeholder='Email Address'
          value={email}
          onChange={(e) => handleEmailInputChange(e)}
        />
      </div>
      <div className='input password-input'>
        <Input.Password
          placeholder='Password'
          type='password'
          iconRender={(visible) =>
            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
          }
          value={password}
          onChange={(e) => handlePasswordInputChange(e)}
          onPressEnter={handleSubmitLogin}
        />
      </div>
      {errorMessage !== '' ? (
        <div className='error-message'>
          <h3>{errorMessage}</h3>
        </div>
      ) : null}

      <div className='forgot-password'>
        <p onClick={handleForgotPassword}>Forgot password?</p>
      </div>

      <div className='sign-in-button' onClick={handleSubmitLogin}>
        <Button loading={loading}>Sign in</Button>
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

  .error-message {
    h3 {
      color: red;
      font-size: 0.9rem;
    }
  }

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
