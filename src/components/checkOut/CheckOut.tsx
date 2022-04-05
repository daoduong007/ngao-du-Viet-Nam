import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  TourCheckOutTotalForm,
  DataCheckoutTravelerInfo,
  DataCheckoutTravelerAddress,
  DataCheckoutTravelerMoreInfo,
  StyledCheckOutContainer,
  FormikItem,
  HotelCheckOutTotalForm,
} from '@components';
import { ICheckOutFormValues } from '@interfaces';
import { validationSchema } from '@utils';
import { AppRoutes } from '@enums';
import { bookingTourSelector } from '@redux';
interface INameScreen {
  screen: string;
}
export const CheckOut = (props: INameScreen) => {
  const IdBooked = useSelector(bookingTourSelector);
  console.log(IdBooked.idTour);
  const { screen } = props;
  const history = useHistory();
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

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    history.push(AppRoutes.THANKS);
  };

  const renderError = (message) => (
    <p className='help is-danger'>{message}</p>
  );
  return (
    <StyledCheckOutContainer>
      <div className='check-out-title'>
        <p>Booking Submission</p>
        <hr />
      </div>
      <div className='check-out-body'>
        <div className='check-out-body-content'>
          <div className='check-out-traveler-details'>
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
                onSubmit={(values, { resetForm }) => {
                  handleSubmit(values);
                  resetForm();
                }}
              >
                <Form>
                  <div className='traveler-details-formik-rally'>
                    {DataCheckoutTravelerInfo.map((item, index) => (
                      <div
                        key={index}
                        className='traveler-details-formik-item'
                      >
                        <FormikItem
                          id={item.id}
                          name={item.name}
                          placeholder={item.placeholder}
                          title={item.title}
                          requid={true}
                        />

                        <ErrorMessage
                          name={item.name}
                          render={renderError}
                        />
                      </div>
                    ))}
                  </div>

                  <div className='traveler-details-formik-address'>
                    <p>Address</p>
                  </div>
                  <div className='traveler-details-formik-item traveler-details-formik-item-address'>
                    <FormikItem
                      id='address'
                      name='address'
                      placeholder='Your Address'
                      title='Address'
                    />
                  </div>
                  <div className='traveler-details-formik-rally'>
                    {DataCheckoutTravelerAddress.map(
                      (item, index) => (
                        <div
                          key={index}
                          className='traveler-details-formik-item'
                        >
                          <FormikItem
                            id={item.id}
                            name={item.name}
                            placeholder={item.placeholder}
                            title={item.title}
                          />
                        </div>
                      ),
                    )}
                  </div>

                  <div className='traveler-details-formik-item traveler-details-formik-item-special'>
                    <FormikItem
                      id='specialRequiment'
                      name='specialRequiment'
                      placeholder='Special Requirement'
                      title='Special Requirement'
                    />
                  </div>
                  <hr />
                  <div>
                    <p>Payment Menthod</p>
                    <p>
                      <span>
                        Pay securely—we use SSL encryption to keep
                        your data safe
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
                          type='radio'
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
                          type='radio'
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

        {screen === 'tour' ? (
          <TourCheckOutTotalForm />
        ) : (
          <HotelCheckOutTotalForm />
        )}
      </div>
    </StyledCheckOutContainer>
  );
};
