import React from 'react';

class EditFormPassword extends React.Component{
  constructor(){

  }

  render(){
    let { session, users } = this.props;
    if(typeof session !== 'undefined'){
    return(
        <div className="container">

        </div>
    );
  }
  return(<div></div>);
  }
}

export default EditFormPassword;
