import React, { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IconFacebookLogin } from '@components';
import { AppRoutes } from '@enums';
import { loginApi } from '@api';
import { validationSchemaSignUp } from '@utils';
import { SignUpSuccess } from '@redux';
import { useFormik } from 'formik';

export const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const history = useHistory();
  const handleLogin = () => {
    history.push(AppRoutes.LOGIN);
  };

  const notifySignUpFail = () => toast.error('sign up fail');
  const notifySignUpSuccess = () => toast.success('sign up success');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (values: any) => {
      setLoading(true);
      const login = async () => {
        const params = {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          password: values.password,
          phone: '0999898998',
          permission_type: 'ADMIN',
          description: 'no',
        };

        const response = await loginApi.postSignUp(params);
        if (response.data.user) {
          dispatch(
            SignUpSuccess({
              email: values.email,
              password: values.password,
            }),
          );

          history.push(AppRoutes.LOGIN);
          notifySignUpSuccess();
          setLoading(false);
        } else {
          setLoading(false);
          notifySignUpFail();
        }
      };

      login();
    },
    validationSchema: validationSchemaSignUp,
  });

  return (
    <StyledSignUp>
      <h1>Register</h1>
      <h2>Welcome to NgaoduVietnam</h2>
      <Form onFinish={formik.handleSubmit}>
        <div className='input name-input'>
          <div>
            <Input
              id='firstName'
              name='firstName'
              placeholder='First Name'
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <h4>{formik.errors.firstName}</h4>
            )}
          </div>

          <div>
            <Input
              id='lastName'
              name='lastName'
              placeholder='Last Name'
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <h4>{formik.errors.lastName}</h4>
            )}
          </div>
        </div>
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
            type='password'
            iconRender={(visible) =>
              visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
            }
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <h4>{formik.errors.password}</h4>
          )}
        </div>

        <div className='sign-in-button'>
          <Button loading={loading} htmlType='submit'>
            Sign up
          </Button>
        </div>
      </Form>

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

  h4 {
    font-size: 0.9rem;
    color: red;
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
  .name-input {
    > div {
      width: 47%;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .ant-input {
      width: 100%;
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
