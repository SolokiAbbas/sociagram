import React from 'react';
import PostsContainer from './posts/posts_container';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import ExploreContainer from './explore/explore_container';
import Footer from './navbar/footer';
import PostsFormContainer from './posts/posts_form_container';
import ProfileContainer from './profile/profile_container';
import EditContainer from './profile/edit/edit_user_container';
import PasswordContainer from './profile/edit/edit_password_container';

const Home = () => (
  <div className='main-login'>

        <Route path="/" component={NavbarContainer} />

        <Switch>
          <Route exact path="/profile/:userId" component={ProfileContainer} />
          <Route exact path="/profile" component={ProfileContainer} />
          <Route exact path="/profile/:userId/edit" component={EditContainer} />
          <Route exact path="/profile/:userId/password" component={PasswordContainer} />
          <Route exact path="/new" component={PostsFormContainer} />
          <Route exact path="/explore" component={ExploreContainer} />
          <Route path="/" component={PostsContainer} />
        </Switch>

        <Footer />

  </div>
);

export default Home;
