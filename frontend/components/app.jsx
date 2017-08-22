import React from 'react';
import GreetingContainer from './session/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div className='main-login'>
    <GreetingContainer />

    <Route exact path="/login" component={SessionFormContainer} />
    <Route exact path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
