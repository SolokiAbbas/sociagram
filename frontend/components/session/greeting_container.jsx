import { connect } from 'react-redux';
import React from 'react';
import Greeting from './greeting';
import { logout } from '../../actions/session/session_actions';

const mapStateToProps = (state) =>{
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
