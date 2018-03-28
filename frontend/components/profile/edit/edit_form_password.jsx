import React from 'react';

class EditFormPassword extends React.Component{

  render(){
    let { users } = this.props;
    if(typeof users !== 'undefined'){
    return(
        <div className="container">

        </div>
    );
  }
  return(<div></div>);
  }
}

export default EditFormPassword;
