import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session/session_actions';
import NavBar from './navbar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) =>{
  return {
    session: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (user) => dispatch(logout(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
