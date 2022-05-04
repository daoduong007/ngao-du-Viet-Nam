import React, { useLayoutEffect, useState } from 'react';
import { Input, Button, Form } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import 'react-toastify/dist/ReactToastify.css';

import { IconFacebookLogin } from '@components';
import { AppRoutes } from '@enums';
import { loginApi } from '@api';
import { validationSchemaLogin } from '@utils';
import { getUser } from '@redux';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);

  const user = useSelector((state: any) => state.signUp);

  const currentAccessToken = useSelector(
    (state: any) => state.login.accessToken,
  );

  console.log(currentAccessToken);

  //prevent users from returning to login screen after successful login
  //and push to Login screen if login success
  useLayoutEffect(() => {
    if (
      currentAccessToken !== '' &&
      currentAccessToken !== undefined
    ) {
      history.push(AppRoutes.HOME_SCREEN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAccessToken]);

  const handleSignUp = () => {
    history.push(AppRoutes.SIGN_UP);
  };
  const handleForgotPassword = () => {
    history.push(AppRoutes.FORGOT_PASSWORD);
  };

  const handleSubmitSuccess = () => {
    setLoading(false);

    notifyLoginSuccess();
  };

  const notifyLoginFail = () =>
    toast.error('Login fail: Incorrect email or password');
  const notifyLoginSuccess = () => toast.success('login success');

  const formik = useFormik({
    //if sign up success => fill 2 field email ad password
    initialValues: {
      email: user.email,
      password: user.password,
    },
    onSubmit: (values: any) => {
      setLoading(true);
      const login = async () => {
        const params = {
          email: values.email,
          password: values.password,
        };
        const response = await loginApi.postLogin(params);

        dispatch(getUser(params));
        console.log(response.data.accessToken);
        if (response.data.accessToken) {
          console.log('login success');
          handleSubmitSuccess();
        } else {
          console.log('login fail');
          setLoading(false);
          notifyLoginFail();
        }
      };

      login();
    },
    validationSchema: validationSchemaLogin,
  });

  return (
    <StyledLogin>
      <h1>Sign in</h1>
      <h2>Welcome to NgaoduVietnam</h2>
      <Form onFinish={formik.handleSubmit}>
        <div className='input email-input'>
          <Input
            id='email'
            name='email'
            placeholder='Email Address'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <h4>{formik.errors.email}</h4>
          )}
        </div>
        <div className='input password-input'>
          <Input.Password
            id='password'
            name='password'
            placeholder='Password'
            value={formik.values.password}
            onChange={formik.handleChange}
            type='password'
            iconRender={(visible) =>
              visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
            }
          />
          {formik.errors.password && formik.touched.password && (
            <h4>{formik.errors.password}</h4>
          )}
        </div>
        <div
          className='sign-in-button'
          //  onClick={handleSubmitLogin}
        >
          <Button loading={loading} htmlType='submit'>
            Sign in
          </Button>
        </div>
      </Form>
      <div className='forgot-password'>
        <p onClick={handleForgotPassword}>Forgot password?</p>
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

  h4 {
    color: red;
    font-size: 0.9rem;
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
