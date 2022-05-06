/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import {
  DataContactUsForm,
  IconHome,
  IconPhone,
  IconEmail,
  BreadcrumbLink,
} from '@components';
import { validationSchemaContactUs } from '@utils';

export const BodyContactUs = () => {
  const initialValues = {
    yourName: '',
    yourEmail: '',
    yourPhone: '',
    message: '',
    notRobot: '',
  };
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const renderError = (message) => (
    <p className='help is-danger'>{message}</p>
  );

  const pathUrl = ['Home'].concat(
    window.location.pathname.split('/'),
  );
  return (
    <StyledBodyContactUs>
      {/* <div className='pagination'>
        <p>Home</p>
        <IconDot color='#C4C4C4' />
        <p>Contact Us</p>
      </div> */}
      <BreadcrumbLink pathUrl={pathUrl} />
      <div className='content'>
        <div className='form-message'>
          <h1>We'd love to hear from you</h1>
          <h2>
            Send us a message and we'll respond as soon as possible
          </h2>
          <Formik
            validationSchema={validationSchemaContactUs}
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
            }}
          >
            <Form>
              {DataContactUsForm.map((item, index) => (
                <div key={index} className='form-message-item'>
                  <Field
                    id={item.id}
                    name={item.name}
                    placeholder={item.placeholder}
                  />
                  <ErrorMessage
                    name={item.name}
                    render={renderError}
                  />
                </div>
              ))}
              <div className='message'>
                <Field
                  as='textarea'
                  id='message'
                  name='message'
                  placeholder='Message'
                />
              </div>
              <div className='form-message-checkbox'>
                <div className='checkbox'>
                  <Field
                    name='notRobot'
                    type='checkbox'
                    value='yes'
                  />
                  <p>I'm not a robot</p>
                </div>

                <div className='recapcha'>
                  <img src='/assets/RecaptchaLogo.png' />
                </div>
              </div>

              <div className='form-message-button'>
                <button type='submit'>Send Message</button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className='our-office-container'>
          <div className='our-office'>
            <p className='our-office-title'>Our Office</p>
            <div className='our-office-item'>
              <div className='our-office-icon'>
                <IconHome />
              </div>
              <div>
                <p>
                  <span>Address</span>
                </p>
                <p>27 Old Gloucester Street, London, WC1N 3AX</p>
              </div>
            </div>
            <div className='our-office-item'>
              <div className='our-office-icon'>
                <IconPhone />
              </div>
              <div>
                <p>
                  <span>Phone Number</span>
                </p>
                <p>+84 (0)20 33998400 </p>
              </div>
            </div>
            <div className='our-office-item'>
              <div className='our-office-icon'>
                <IconEmail />
              </div>
              <div>
                <p>
                  <span>Email Us</span>
                </p>
                <p>info@ngaoduvietnam.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='map'>
        <img src='/assets/mapContactUs.png' />
      </div>
    </StyledBodyContactUs>
  );
};

const StyledBodyContactUs = styled.div`
  width: 100%;
  padding: 0 165px;
  margin-top: 49px;

  font-family: 'DM Sans';
  font-style: normal;
  text-align: left;

  .pagination {
    display: flex;
    flex-direction: row;
    align-items: center;
    > p {
      margin: 0;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      color: #3d3e3f;
    }
    > svg {
      margin: 0 24px;
    }
  }

  .content {
    margin-bottom: 132px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .form-message {
    width: 45%;
    > h1 {
      font-weight: 700;
      font-size: 32px;
      line-height: 72px;

      color: #000000;
    }
    > h2 {
      font-weight: 400;
      font-size: 14px;
      line-height: 28px;

      color: rgba(0, 0, 0, 0.8);
    }

    .form-message-item,
    .message {
      width: 100%;
      height: 48px;
      margin-bottom: 15px;

      input,
      textarea {
        width: 100%;
        height: 100%;
        border: 0;
        background: #f5f5f5;
        padding: 5px 15px;
      }
      .help {
        color: red;
        font-size: 12px;
      }
    }

    .message {
      height: 96px;
    }

    .form-message-checkbox {
      margin-top: 2px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      background-color: #f5f5f5;

      padding: 0 12px;
      width: 302px;
      height: 78px;

      .checkbox {
        display: flex;
        flex-direction: row;
        align-items: center;
        p {
          padding-left: 12px;
          margin: 0;
          font-weight: 600;
          font-size: 14px;
        }
      }

      .recapcha {
        width: 70px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .form-message-button {
      margin-top: 29px;
      display: flex;
      justify-content: flex-end;

      button {
        width: 200px;
        height: 44px;
        background: #ff7b42;
        border: 0;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        text-align: center;

        color: #ffffff;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .our-office-container {
    background-image: url('/assets/BodyContactUs.png');
    background-repeat: no-repeat;
    background-size: cover;

    height: 611px;
    width: 49%;

    display: flex;
    justify-content: left;
    align-items: flex-end;

    color: #ffffff;

    p {
      margin: 0;
    }
    .our-office-item {
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
      .our-office-icon {
        margin-right: 14px;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ff7b42;
      }
    }
    .our-office {
      width: 77%;
      height: 53%;
      padding: 0 39px;
      background: #1c1c1e;

      .our-office-title {
        margin: 23px 0 12px 0;
        font-weight: 700;
        font-size: 32px;
        line-height: 72px;
      }
      span {
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        /* or 128% */

        color: #ff7b42;
      }
    }
  }

  .map {
    margin: 0 -165px;
    img {
      max-width: 100%;
      height: auto;
    }
  }

  @media (min-width: 1441px) {
    width: 1440px;
    margin: 0 auto;
    margin-top: 49px;
  }
  @media (max-width: 1200px) {
    padding: 0 50px;
    .map {
      margin: 0 -50px;
    }
  }
  @media (max-width: 900px) {
    padding: 0 30px;
    margin-top: 30px;
    .map {
      margin: 0 -30px;
    }
  }
  @media (max-width: 768px) {
    padding: 0 20px;
    .content {
      margin-bottom: 50px;
      flex-direction: column;
      .form-message {
        width: 100%;
        margin-bottom: 30px;
      }
      .our-office-container {
        width: 100%;
      }
    }
    .map {
      margin: 0 -20px;
      img {
      }
    }
  }
  @media (max-width: 600px) {
    margin-top: 20px;
    .form-message {
      h1 {
        font-size: 25px;
        text-align: center;
      }
      h2 {
        text-align: center;
      }
    }
    .our-office-container .our-office {
      padding: 0 10px;
      height: 340px;
    }
    .our-office-container .our-office .our-office-title {
      font-size: 25px;
    }
    .our-office-container p {
      font-size: 12px;
    }
    .our-office-container .our-office span {
      font-size: 16px;
    }
  }
  @media (max-width: 450px) {
    .our-office-container {
      height: 450px;
      .our-office {
        height: 330px;
      }
    }
  }
`;
