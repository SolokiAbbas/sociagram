import React from 'react';
import EditNav from './edit_nav';
import EditFormUser from './edit_form_user';

class EditItem extends React.Component{
  render(){
    let { session } = this.props;
    let current_id = session.currentUser.id;
    if(typeof session !== 'undefined'){
    return(
        <div className="edit-container">
          <EditNav users={this.props.users[current_id]}  />
          <EditFormUser users={this.props.users[current_id]} updateUser={this.props.updateUser}/>
        </div>
    );
  }
  return(<div></div>);
  }
}

export default EditItem;
