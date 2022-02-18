import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { HomeScreen } from '@containers';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={HomeScreen} exact />
      </Switch>
      {/* <HomeScreen /> */}
    </div>
  );
}

export default App;
