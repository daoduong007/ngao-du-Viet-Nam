import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Form as FormAntd, Input, Button, Radio, Space } from 'antd';

import {
  TourCheckOutTotalForm,
  DataCheckoutTravelerMoreInfo,
  StyledCheckOutContainer,
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
  const { TextArea } = Input;
  const IdBooked = useSelector(bookingTourSelector);
  console.log(IdBooked.bookingTour.idTour);

  const bookingInfo = useSelector((state: any) => state.checkOut);

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

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values: any, { resetForm }) => {
      handleSubmit(values);
      resetForm();
    },
    validationSchema: validationSchema,
  });
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
              <h1>Traveler detail</h1>
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
              <FormAntd onFinish={formik.handleSubmit}>
                <div className='traveler-details-formik-rally'>
                  <div className='traveler-details-formik-item'>
                    <h3>
                      First Name <span>*</span>
                    </h3>
                    <Input
                      id='firstName'
                      name='firstName'
                      placeholder='First Name'
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.firstName &&
                      formik.touched.firstName && (
                        <p className='help is-danger'>
                          {formik.errors.firstName}
                        </p>
                      )}
                  </div>
                  <div className='traveler-details-formik-item'>
                    <h3>
                      Last Name <span>*</span>
                    </h3>
                    <Input
                      id='lastName'
                      name='lastName'
                      placeholder='Last Name'
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.lastName &&
                      formik.touched.lastName && (
                        <p className='help is-danger'>
                          {formik.errors.lastName}
                        </p>
                      )}
                  </div>
                  <div className='traveler-details-formik-item'>
                    <h3>
                      Email <span>*</span>
                    </h3>
                    <Input
                      id='email'
                      name='email'
                      placeholder='Email Address'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p className='help is-danger'>
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                  <div className='traveler-details-formik-item'>
                    <h3>
                      Phone Number <span>*</span>
                    </h3>
                    <Input
                      id='phoneNumber'
                      name='phoneNumber'
                      placeholder='Your Phone'
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.phoneNumber &&
                      formik.touched.phoneNumber && (
                        <p className='help is-danger'>
                          {formik.errors.phoneNumber}
                        </p>
                      )}
                  </div>
                </div>

                <h2>Address</h2>
                <div className='traveler-details-formik-item traveler-details-formik-item-address'>
                  <h3>Your Address </h3>
                  <Input
                    id='address'
                    name='address'
                    placeholder='Your Address'
                    value={formik.values.address}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className='traveler-details-formik-rally'>
                  <div className='traveler-details-formik-item'>
                    <h3>City</h3>
                    <Input
                      id='city'
                      name='city'
                      placeholder='Your City'
                      value={formik.values.city}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className='traveler-details-formik-item'>
                    <h3>State/Province/Region</h3>
                    <Input
                      id='province'
                      name='province'
                      placeholder='Your State/Province/Region'
                      value={formik.values.province}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className='traveler-details-formik-item'>
                    <h3>Zip Code/ Postal Code</h3>
                    <Input
                      id='zipCode'
                      name='zipCode'
                      placeholder='Zip Code/ Postal Code'
                      value={formik.values.zipCode}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className='traveler-details-formik-item'>
                    <h3>Country</h3>
                    <Input
                      id='country'
                      name='country'
                      placeholder='Country'
                      value={formik.values.country}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div className='traveler-details-formik-item traveler-details-formik-item-special'>
                  <h2>Special Requirement</h2>
                  <TextArea
                    rows={4}
                    id='specialRequiment'
                    name='specialRequiment'
                    placeholder='Special Requirement'
                    value={formik.values.specialRequiment}
                    onChange={formik.handleChange}
                  />
                </div>
                <hr />
                <div className='traveler-details-formik-payment'>
                  <h1>Payment Menthod</h1>
                  <Radio.Group
                    id='paymentMethod'
                    name='paymentMethod'
                    value={formik.values.paymentMethod}
                    onChange={formik.handleChange}
                  >
                    <Space direction='vertical'>
                      <Radio value='creditCard'>
                        Credit Card{' '}
                        <img src='/assets/creditCard.png' />
                      </Radio>
                      <Radio value='paypal'>
                        Paypal <img src='/assets/paypal.png' />
                      </Radio>
                    </Space>
                  </Radio.Group>
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
                  <Button htmlType='submit'>Complete Booking</Button>
                </div>
              </FormAntd>
            </div>
          </div>
        </div>

        {screen === 'tour' ? (
          <TourCheckOutTotalForm data={bookingInfo} />
        ) : (
          <HotelCheckOutTotalForm data={bookingInfo} />
        )}
      </div>
    </StyledCheckOutContainer>
  );
};
