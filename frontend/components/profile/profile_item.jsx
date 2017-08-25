import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ProfileItem extends React.Component{

  render(){
      return(
          <section>
            <div>Pic</div>
            <div>{currentUser.username}</div>
            <div>{currentUser.Fname}</div>
            <div>{currentUser.Lname}</div>
            <button className="nav-logout" onClick={this.props.logout}> Log Out </button>
          </section>
      );
    }
  }

export default ProfileItem;
