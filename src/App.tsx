import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { HomeScreen, AboutScreen } from '@containers';
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
      </Switch>
      {/* <HomeScreen /> */}
    </div>
  );
}

export default App;
