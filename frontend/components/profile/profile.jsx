import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProfileItem from './profile_item';

class Profile extends React.Component{

  render(){
    let { session } = this.props;
    if (this.props.user === "profile"){
      return(
        <ProfileItem session={ session }/>
      );
    }else {
      let other = parseInt(this.props.user.slice(-1));
      this.props.fetchAUser(other);
    return(
      <ProfileItem />
    );
  }}

}

export default Profile;
