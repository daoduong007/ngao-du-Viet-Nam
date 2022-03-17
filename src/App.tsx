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
import { AppRoutes } from '@enums';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path={AppRoutes.HOME_SCREEN_} exact>
          <HomeScreen />
        </Route>
        <Route path={AppRoutes.HOME_SCREEN} exact>
          <HomeScreen />
        </Route>
        <Route path={AppRoutes.ABOUT_SCREEN} exact>
          <AboutScreen />
        </Route>
        <Route path={AppRoutes.LIST_TOUR_SCREEN} exact>
          <ListTourScreen />
        </Route>
        <Route path={AppRoutes.TOUR_DETAIL}>
          <TourDetailScreen />
        </Route>
        <Route path={AppRoutes.CHECK_OUT}>
          <CheckOutScreen />
        </Route>
        <Route path={AppRoutes.LIST_HOTEL_SCREEN}>
          <ListHotelScreen />
        </Route>
        <Route path={AppRoutes.HOTEL_DETAIL}>
          <HotelDetailScreen />
        </Route>
        <Route path={AppRoutes.HOTEL_CHECKOUT}>
          <HotelCheckOutScreen />
        </Route>
        <Route path={AppRoutes.PRIVACY_POLICY}>
          <PrivacyPolicyScreen />
        </Route>
        <Route path={AppRoutes.CONTACT_US}>
          <ContactUsScreen />
        </Route>
        <Route path={AppRoutes.THANKS}>
          <ThanksScreen />
        </Route>
        <Route path={AppRoutes.LOGIN}>
          <LoginScreen />
        </Route>
        <Route path={AppRoutes.SIGN_UP}>
          <SignUpScreen />
        </Route>
        <Route path={AppRoutes.FORGOT_PASSWORD}>
          <ForgotPasswordScreen />
        </Route>
        <Route path={AppRoutes.CHANGE_PASSWORD}>
          <ChangePasswordScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
