import React from 'react';
import EditNav from './edit_nav';
import EditFormPassword from './edit_form_password';

class EditPassword extends React.Component{
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
          <EditFormPassword users={this.props.users[current_id]} errors={this.props.users.errors}
            updateUser={this.props.updateUser} clearErrors={this.props.clearErrors}/>
        </div>
    );
  }
  return(<div></div>);
  }
}

export default EditPassword;
