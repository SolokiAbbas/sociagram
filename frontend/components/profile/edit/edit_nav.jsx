import React from 'react';
import { Link } from 'react-router-dom';

class EditNav extends React.Component{
  render(){
    let { session, users } = this.props;
    if(typeof session !== 'undefined'){
    return(
        <div className="container">
          <Link to="/profile/edit">Edit Profile</Link>
          <Link to="/profile/password">Change Password</Link>
        </div>
    );
  }
  return(<div></div>);
  }
}

export default EditNav;
