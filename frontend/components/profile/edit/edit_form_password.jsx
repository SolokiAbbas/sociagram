import React from 'react';

class EditFormPassword extends React.Component{
  constructor(props){
    super(props);
    this.current_id = this.props.users.id;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[password]", this.state.password);
    formData.append("user[newpassword]", this.state.Fname);
    this.props.updateUser(formData, this.current_id);
  }

  render(){
    let { users } = this.props;
    if(typeof users !== 'undefined'){
    return(
      <form className="user-edit-form" onSubmit={this.handleSubmit}>

      </form>
    );
  }
  return(<div></div>);
  }
}

export default EditFormPassword;
