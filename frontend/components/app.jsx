import React from 'react';
import GreetingContainer from './session/greeting_container';
import SessionFormContainer from './session/session_form_container';
import PostsContainer from './posts/posts_container';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import PostsFormContainer from './posts/posts_form_container';

const App = () => (
  <div className='main-login'>

      <ProtectedRoute path="/" component={NavbarContainer} />
      <Switch>
        <ProtectedRoute path="/new" component={PostsFormContainer} />
        <ProtectedRoute path="/" component={PostsContainer} />
      </Switch>
    <Switch>
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
    </Switch>

  </div>
);

export default App;
