import React from 'react';
import { Route, Link } from 'react-router-dom';

class ProfileItem extends React.Component{

  render(){
    debugger
    return(
      <section className="profile-section">
        <div>Pic</div>
        <div>{this.props.session.currentUser.username}</div>
        <div>{this.props.session.currentUser.Fname}</div>
        <div>{this.props.session.currentUser.Lname}</div>
        <button className="nav-logout" onClick={this.props.logout}>Log Out</button>
      </section>
    );
    }
  }

export default ProfileItem;
