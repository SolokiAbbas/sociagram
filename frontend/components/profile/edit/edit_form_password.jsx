import React from 'react';

class EditFormPassword extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newpassword1: "",
      newpassword2: "",
      oldpassword: "",
      errors: "",
      sent: false,
    };
    this.allerrors=[];

    this.current_id = this.props.users.id;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  checkPassword(pass1, pass2){
    if(pass1 === pass2 && pass1.length > 0 && pass2.length > 0){
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
      this.setState({sent: true, errors: ""});
      this.props.clearErrors();
    } else {
      this.setState({errors: "New Password Does Not Match", confirm: ""});
    }
  }

  render(){
    let { users } = this.props;
    if(typeof users !== 'undefined'){
      if(typeof this.props.errors !== 'undefined'){
          this.allerrors = this.props.errors.map((err, idx) =>{
            return(
              <div className="session-errors">
                <li>{err}</li>
              </div>
            );
          });
        }
    return(
      <div className="complete-password-form">
        <form className="user-edit-form" onSubmit={this.handleSubmit}>
          <div className="edit-label">
            <label className="input-label">Old Password</label>
            <input type="password" className="input-field input-max-width" onChange={this.update('oldpassword')} value={this.state.oldpassword} />
          </div>
          <div className="edit-label">
            <label className="input-label">New Password</label>
            <input type="password" required className="input-field input-max-width" onChange={this.update('newpassword1')} value={this.state.newpassword1} />
          </div>
          <div className="edit-label">
            <label className="input-label">Confirm Password</label>
            <input type="password" required className="input-field input-max-width" onChange={this.update('newpassword2')} value={this.state.newpassword2} />
          </div>
          <div className="edit-submit">
            <input className="btn btn-primary" type="submit" value="Change Password" />
          </div>
        </form>
        <div className="password-error">
          {this.state.errors.length > 0 ? this.state.errors : ""}
          {this.allerrors}
        </div>
        <div className="password-confirm">
          {this.state.errors}
          {this.allerrors.length === 0 && this.state.sent ? "Password has been Changed" : "" }
        </div>
      </div>

    );
  }
  return(<div></div>);
  }
}

export default EditFormPassword;
