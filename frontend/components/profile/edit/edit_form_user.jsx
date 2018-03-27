import React from 'react';

class EditFormUser extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Fname: this.props.session.currentUser.Fname,
      Lname: this.props.session.currentUser.Lname,
      email: this.props.session.currentUser.email,
      username: this.props.session.currentUser.username,
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const current_id = this.props.session.currentUser.id;
    const user = Object.assign({}, this.state );
    this.props.updateUser(user, current_id);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render(){
    let { session } = this.props;
    if(typeof session !== 'undefined'){
    return(
      <div className="edit-form">
        <div>
          <img className="modal-avatar" src={this.props.session.currentUser.image_url}/>
          <div className="user-text">
            {this.props.session.currentUser.username}
          </div>
        </div>
        <form className="user-edit-form" onSubmit={this.handleSubmit}>
          <div className="edit-label">
            <label className="input-label">First Name</label>
            <input className="input-field input-max-width" onChange={this.update('Fname')} value={this.state.Fname} />
          </div>
          <div className="edit-label">
            <label className="input-label">Last Name</label>
            <input className="input-field input-max-width" onChange={this.update('Lname')} value={this.state.Lname} />
          </div>
          <div className="edit-label">
            <label className="input-label">Username</label>
            <input className="input-field input-max-width" onChange={this.update('username')} value={this.state.username}/>
          </div>
          <div className="edit-label">
            <label className="input-label">Email</label>
            <input className="input-field input-max-width" onChange={this.update('email')} value={this.state.email}/>
          </div>
          <div className="edit-submit">
            <input className="btn btn-primary" type="submit" value="Make Changes" />
          </div>
        </form>
      </div>
    );
  }
  return(<div></div>);
  }
}

export default EditFormUser;
