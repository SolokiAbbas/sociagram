import React from 'react';

class EditItem extends React.Component{
  render(){
    let { session, users } = this.props;
    if(typeof session !== 'undefined'){
    return(
        <div className="posts-index">

        </div>
    );
  }
  return(<div></div>);
  }
}

export default EditItem;
