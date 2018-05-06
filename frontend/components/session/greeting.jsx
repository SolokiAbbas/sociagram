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
        <div id="carouselLogin" class="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="/assets/login_phone.jpeg" height="440px" width="382px" alt="Log in Phone"/>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/mobile2.jpeg'} height="440px" width="382px" alt="Phone2"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/mobile3.jpeg'} height="440px" width="382px" alt="Phone3"/>
            </div>
          </div>
        </div>
        <Redirect to="/signup"/>
      </div>
    );
  }
};

export default Greeting;
