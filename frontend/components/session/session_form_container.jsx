import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) =>{
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.location.pathname.slice(1),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formaction = ownProps.location.pathname === '/signup' ? signup : login;

  return {
    processForm: (user) => dispatch(formaction(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
