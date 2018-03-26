import React from 'react';
import PostsContainer from './posts/posts_container';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import PostsFormContainer from './posts/posts_form_container';
import ProfileContainer from './profile/profile_container';
import EditContainer from './profile/edit/edit_container';

const Home = () => (
  <div className='main-login'>

        <Route path="/" component={NavbarContainer} />

      <Switch>
        <Route path="/profile/:userId" component={ProfileContainer} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/profile/edit" component={EditContainer} />
        <Route exact path="/profile/password" component={ProfileContainer} />
        <Route exact path="/new" component={PostsFormContainer} />
        <Route path="/" component={PostsContainer} />
      </Switch>

  </div>
);

export default Home;
