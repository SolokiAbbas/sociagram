import React from 'react';
import { Link } from 'react-router-dom';

class EditNav extends React.Component{
  render(){
    let { session } = this.props;

    if(typeof this.props.session !== 'undefined'){
      console.log("inside");
    return(
        <div>
          <Link to="/edit">Edit Profile</Link>
          <Link to="/password">Change Password</Link>
        </div>
    );
  }
  return(<div></div>);
  }
}

export default EditNav;
