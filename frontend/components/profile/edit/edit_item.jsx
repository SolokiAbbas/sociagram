import React from 'react';
import EditNav from './edit_nav';

class EditItem extends React.Component{
  render(){
    let { session, users } = this.props;
    if(typeof session !== 'undefined'){
    return(
        <div className="container">
          <EditNav />
          
        </div>
    );
  }
  return(<div></div>);
  }
}

export default EditItem;
