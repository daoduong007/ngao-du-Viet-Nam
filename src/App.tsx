import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import {
  HomeScreen,
  AboutScreen,
  ListTourScreen,
  TourDetailScreen,
} from '@containers';
import { AppRoutes } from '@enums';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route
          path={AppRoutes.HOME_SCREEN}
          component={HomeScreen}
          exact
        />
        <Route
          path={AppRoutes.ABOUT_SCREEN}
          component={AboutScreen}
          exact
        />
        <Route
          path={AppRoutes.LIST_TOUR_SCREEN}
          component={ListTourScreen}
          exact
        />
        <Route
          path={AppRoutes.TOUR_DETAIL_SCREEN}
          component={TourDetailScreen}
          exact
        />
      </Switch>
    </div>
  );
}

export default App;
