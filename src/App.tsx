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
        <Route path={'/Tours/:slug'}>
          <TourDetailScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
