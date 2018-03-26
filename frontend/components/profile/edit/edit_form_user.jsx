import React from 'react';

class EditFormUser extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Fname: this.session.currentUser.Fname,
      Lname: this.session.currentUser.Lname,
      email: this.session.currentUser.email,
      username: this.session.currentUser.username,
    };
    this.update = this.update.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render(){
    let { session, users } = this.props;
    if(typeof session !== 'undefined'){
    return(
      <form className="posts-form" onSubmit={this.handleSubmit}>
        <label>First Name:</label>
        <input className="input-field" onChange={this.update('Fname')} value={this.state.Fname} />
        <label>Last Name:</label>
        <input className="input-field" onChange={this.update('Lname')} value={this.state.Lname} />
        <label>Username:</label>
        <input className="input-field" onChange={this.update('username')} value={this.state.username}/>
        <label>Email:</label>
        <input className="input-field" onChange={this.update('email')} value={this.state.email}/>

      <input className="submit-button" type="submit" value="Make Changes" />
      </form>
    );
  }
  return(<div></div>);
  }
}

export default EditFormUser;
