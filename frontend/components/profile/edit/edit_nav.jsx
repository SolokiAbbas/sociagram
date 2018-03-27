import React from 'react';
import { Link } from 'react-router-dom';

class EditNav extends React.Component{
  render(){
    const current_id = this.props.session.currentUser.id;
    if(typeof this.props.session !== 'undefined'){
    return(
        <div>
          <Link to={`/profile/${current_id}/edit`}>Edit Profile</Link>
          <Link to={`/profile/${current_id}/password`}>Change Password</Link>
        </div>
    );
  }
  return(<div></div>);
  }
}

export default EditNav;
