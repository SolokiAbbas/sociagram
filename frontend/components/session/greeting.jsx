import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import SessionFormContainer from './session_form_container';

const Greeting = (props) => {
  if (props.currentUser) {
    return (
        <button onClick={props.logout}> Log Out </button>
    );
  } else {
    return (
      <div>
        <img src={window.staticImage.phonelogin} height="440px" width="382px" alt="Log in Phone"/>
        <Redirect to="/signup"/>
      </div>
    );
  }
};

export default Greeting;
