import React from 'react';
import { Link } from 'react-router-dom';

class EditNav extends React.Component{
  render(){
    if(typeof this.props.users !== 'undefined'){
      const current_id = this.props.users.id;
    return(
        <div className="nav-container">
            <Link className={this.props.path === 'edit' ? "edit-nav-text edit-highlight" : "edit-nav-text"} to={`/profile/${current_id}/edit`}>Edit Profile</Link>
            <Link className="edit-nav-text" to={`/profile/${current_id}/password`}>Change Password</Link>
        </div>
    );
  }
  return(<div></div>);
  }
}

export default EditNav;
