import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Profile extends React.Component{

  render(){
    let other = parseInt(this.props.clicked_user.slice(8));
    let current = this.props.users[other];
    if(typeof current === 'undefined'){
      this.props.fetchAUser(other);
    }
    if (this.props.clicked_user === "profile"){
      return(
        <section className="profile-section">
          <div>Pic</div>
          <div>{this.props.session.currentUser.username}</div>
          <div>{this.props.session.currentUser.Fname}</div>
          <div>{this.props.session.currentUser.Lname}</div>
          <button className="nav-new" onClick={this.props.logout}>Log Out</button>
        </section>
      );
    }else if(!current){
      return(<div></div>);
    }else
    {
    return(
      <section className="profile-section">
        <div>Pic</div>
        <div>{current.username}</div>
        <div>{current.Fname}</div>
        <div>{current.Lname}</div>
        <button className="nav-new" onClick={this.props.logout}>Log Out</button>
      </section>
    );
  }}

}

export default Profile;
