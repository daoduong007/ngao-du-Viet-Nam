import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import {
  HomeScreen,
  AboutScreen,
  ListTourScreen,
  TourDetailScreen,
  CheckOutScreen,
  ListHotelScreen,
  HotelDetailScreen,
  HotelCheckOutScreen,
  PrivacyPolicyScreen,
  ContactUsScreen,
  ThanksScreen,
  LoginScreen,
  SignUpScreen,
  ForgotPasswordScreen,
  ChangePasswordScreen,
} from '@containers';
import { PageNotFound } from '@components';
import { AppRoutes } from '@enums';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path={AppRoutes.HOME_SCREEN} exact>
          <HomeScreen />
        </Route>
        <Route path={AppRoutes.ABOUT_SCREEN} exact>
          <AboutScreen />
        </Route>
        <Route path={AppRoutes.LIST_TOUR_SCREEN} exact>
          <ListTourScreen />
        </Route>
        <Route path={AppRoutes.TOUR_DETAIL} exact>
          <TourDetailScreen />
        </Route>
        <Route path={AppRoutes.CHECK_OUT} exact>
          <CheckOutScreen />
        </Route>
        <Route path={AppRoutes.LIST_HOTEL_SCREEN} exact>
          <ListHotelScreen />
        </Route>
        <Route path={AppRoutes.HOTEL_DETAIL} exact>
          <HotelDetailScreen />
        </Route>
        <Route path={AppRoutes.HOTEL_CHECKOUT} exact>
          <HotelCheckOutScreen />
        </Route>
        <Route path={AppRoutes.PRIVACY_POLICY} exact>
          <PrivacyPolicyScreen />
        </Route>
        <Route path={AppRoutes.CONTACT_US} exact>
          <ContactUsScreen />
        </Route>
        <Route path={AppRoutes.THANKS} exact>
          <ThanksScreen />
        </Route>
        <Route path={AppRoutes.LOGIN} exact>
          <LoginScreen />
        </Route>
        <Route path={AppRoutes.SIGN_UP} exact>
          <SignUpScreen />
        </Route>
        <Route path={AppRoutes.FORGOT_PASSWORD} exact>
          <ForgotPasswordScreen />
        </Route>
        <Route path={AppRoutes.CHANGE_PASSWORD} exact>
          <ChangePasswordScreen />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
