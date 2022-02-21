import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { HomeScreen, AboutScreen } from '@containers';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/About' component={AboutScreen} exact />
      </Switch>
      {/* <HomeScreen /> */}
    </div>
  );
}

export default App;
