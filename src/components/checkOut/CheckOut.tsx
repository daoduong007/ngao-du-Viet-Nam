import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  CheckOutTotalForm,
  DataCheckoutTravelerInfo,
  DataCheckoutTravelerAddress,
  DataCheckoutTravelerMoreInfo,
  StyledCheckOutContainer,
} from '@components';
import { ICheckOutFormValues } from '@interfaces';

export const CheckOut = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    phoneNumber: Yup.string().required(),
    address: Yup.string().required(),
    city: Yup.string().required(),
    province: Yup.string().required(),
    zipCode: Yup.string().required(),
    country: Yup.string().required(),
    specialRequiment: Yup.string().required(),
    paymentMethod: Yup.string().required(),
  });

  const initialValues: ICheckOutFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    province: '',
    zipCode: '',
    country: '',
    specialRequiment: '',
    paymentMethod: '',
  };

  const renderError = (message) => (
    <p className='help is-danger'>{message}</p>
  );
  return (
    <StyledCheckOutContainer>
      <div className='check-out-body'>
        <div className='check-out-body-title'>
          <p>Booking Submission</p>
        </div>
        <div className='check-out-traveler-details'>
          <hr />
          <div className='traveler-details-description'>
            <p>Traveler detail</p>
            <p>
              <span>
                Information we need to confirm your tour or activity
              </span>
            </p>
          </div>
        </div>
        <div className='traveler-details-form'>
          <div className='traveler-details-formik-lead-traveler'>
            <p>Lead Traveler (Adult)</p>
          </div>
          <div className='traveler-details-formik'>
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }}
            >
              <Form>
                <div className='traveler-details-formik-rally'>
                  {DataCheckoutTravelerInfo.map((item, index) => (
                    <div
                      key={index}
                      className='traveler-details-formik-item'
                    >
                      <label htmlFor={item.id}>{item.title}</label>
                      <Field
                        id={item.id}
                        name={item.id}
                        placeholder={item.title}
                      />
                      <ErrorMessage
                        name={item.id}
                        render={renderError}
                      />
                    </div>
                  ))}
                </div>

                <div className='traveler-details-formik-address'>
                  <p>Address</p>
                </div>
                <div className='traveler-details-formik-item traveler-details-formik-item-address'>
                  <label htmlFor='address'>Your Address</label>
                  <Field
                    id='address'
                    name='address'
                    placeholder='Your Address'
                  />
                </div>
                <div className='traveler-details-formik-rally'>
                  {DataCheckoutTravelerAddress.map((item, index) => (
                    <div
                      key={index}
                      className='traveler-details-formik-item'
                    >
                      <label htmlFor={item.id}>{item.title}</label>
                      <Field
                        id={item.id}
                        name={item.id}
                        placeholder={item.title}
                      />
                    </div>
                  ))}
                </div>

                <div className='traveler-details-formik-item traveler-details-formik-item-special'>
                  <label htmlFor='specialRequiment'>
                    Special Requirement
                  </label>
                  <Field
                    id='specialRequiment'
                    name='specialRequiment'
                    placeholder='Special Requirement'
                  />
                </div>
                <hr />
                <div>
                  <p>Payment Menthod</p>
                  <p>
                    <span>
                      Pay securely—we use SSL encryption to keep your
                      data safe
                    </span>
                  </p>
                </div>
                <div
                  role='group'
                  aria-labelledby='checkbox-group'
                  className='traveler-details-formik-payment'
                >
                  <div className='traveler-details-formik-payment-item'>
                    <label>
                      <Field
                        type='checkbox'
                        name='paymentMethod'
                        value='Credit Card'
                      />
                      Credit Card
                    </label>
                    <img src='/assets/creditCard.png' />
                  </div>
                  <div className='traveler-details-formik-payment-item'>
                    <label>
                      <Field
                        type='checkbox'
                        name='paymentMethod'
                        value='Paypal'
                      />
                      Paypal
                    </label>
                    <img src='/assets/paypal.png' />
                  </div>
                </div>
                <div className='traveler-details-formik-payment-info'>
                  <ul>
                    {DataCheckoutTravelerMoreInfo.map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      ),
                    )}
                  </ul>
                </div>
                <div className='traveler-details-formik-submit'>
                  <button type='submit'>
                    <span>Complete Booking</span>
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <CheckOutTotalForm />
    </StyledCheckOutContainer>
  );
};
