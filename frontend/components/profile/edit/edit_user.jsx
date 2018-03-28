import React from 'react';
import EditNav from './edit_nav';
import EditFormUser from './edit_form_user';

class EditUser extends React.Component{
  render(){
    let { session } = this.props;
    let current_id = session.currentUser.id;
    let path;
    if(this.props.path.slice(-4,this.props.path.length) === 'edit'){
      path = 'edit';
    }else{
      path='password';
    }
    if(typeof session !== 'undefined'){
    return(
        <div className="edit-container">
          <EditNav users={this.props.users[current_id]} path={path}/>
          <EditFormUser users={this.props.users[current_id]} updateUser={this.props.updateUser}/>
        </div>
    );
  }
  return(<div></div>);
  }
}

export default EditUser;
