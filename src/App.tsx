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
      </Switch>
    </div>
  );
}

export default App;
