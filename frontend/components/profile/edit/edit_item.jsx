import React from 'react';
import EditNav from './edit_nav';
import EditFormUser from './edit_form_user';

class EditItem extends React.Component{
  render(){
    let { session } = this.props;
    if(typeof session !== 'undefined'){
    return(
        <div className="container">
          <EditNav session={session} />
        </div>
    );
  }
  return(<div></div>);
  }
}

export default EditItem;
