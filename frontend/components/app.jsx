import React from 'react';
import GreetingContainer from './session/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Sociagram</h1>
    <GreetingContainer />

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
