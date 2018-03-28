import React from 'react';

class EditFormPassword extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newpassword1: "",
      newpassword2: "",
      oldpassword: "",
      errors: "",
    };
    this.current_id = this.props.users.id;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  checkPassword(pass1, pass2){
    if(pass1 === pass2){
      return true;
    }else {
      return false;
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[oldpassword]", this.state.oldpassword);
    if(this.checkPassword(this.state.newpassword1, this.state.newpassword2)){
      formData.append("user[newpassword]", this.state.newpassword1);
      this.props.updateUser(formData, this.current_id);
    } else {
      this.setState({errors: "Password Does Not Match"});
    }
  }

  render(){
    let { users } = this.props;
    if(typeof users !== 'undefined'){
    return(
      <div>
        <form className="user-edit-form" onSubmit={this.handleSubmit}>
          <div className="edit-label">
            <label className="input-label">Old Password</label>
            <input type="password" className="input-field input-max-width" onChange={this.update('oldpassword')} value={this.state.oldpassword} />
          </div>
          <div className="edit-label">
            <label className="input-label">New Password</label>
            <input type="password" className="input-field input-max-width" onChange={this.update('newpassword1')} value={this.state.newpassword1} />
          </div>
          <div className="edit-label">
            <label className="input-label">Confirm Password</label>
            <input type="password" className="input-field input-max-width" onChange={this.update('newpassword2')} value={this.state.newpassword2} />
          </div>
          <div className="edit-submit">
            <input className="btn btn-primary" type="submit" value="Change Password" />
          </div>
        </form>
        {this.state.errors.length > 0 ? this.state.errors : ""}
      </div>

    );
  }
  return(<div></div>);
  }
}

export default EditFormPassword;
