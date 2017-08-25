import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session/session_actions';
import Profile from './profile';
import { fetchAUser } from '../../actions/users/users_action';

const mapStateToProps = (state, ownProps) =>{
  return {
    clicked_user: ownProps.location.pathname.slice(1),
    session: state.session,
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (user) => dispatch(logout(user)),
    fetchAUser: (id) => dispatch(fetchAUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
