import React from 'react';

class EditFormUser extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Fname: "",
      Lname: "",
      email: "",
      bio: "",
      gender: "Not Specified",
      username: "",
      sent: false,
    };
    this.current_id = this.props.path;
    this.allerrors=[];

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchAUser(this.props.path).then(()=> this.setState({Fname: this.props.users.Fname,
          Lname: this.props.users.Lname, email: this.props.users.email, username: this.props.users.username,
          bio: this.props.users.bio}));
  }

  handleSubmit(e){
    e.preventDefault();
    this.allerrors = [];
    const formData = new FormData();
    formData.append("user[email]", this.state.email);
    formData.append("user[bio]", this.state.bio);
    formData.append("user[gender]", this.state.gender);
    formData.append("user[Fname]", this.state.Fname);
    formData.append("user[Lname]", this.state.Lname);
    formData.append("user[username]", this.state.username);
    this.props.updateUser(formData, this.current_id);
    this.setState({sent: true});
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render(){
    if(typeof this.props.users !== 'undefined'){
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
      <div className="edit-form">
        <div className="edit-title">
          <img className="modal-avatar" src={this.props.users.image_url}/>
          <div className="user-text edit-user-text">
            {this.props.users.username}
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
          <div className="private-data">
            Private Data
          </div>
          <div className="edit-label">
            <label className="input-label">Gender</label>
              <select className="gender-edit select-color" value={this.state.gender} onChange={this.update('gender')} >
                <option disabled defaultValue>-- Not Specified --</option>
                <option value="Female">Male</option>
                <option value="Male">Female</option>
              </select>
          </div>
          <div className="edit-label">
            <label className="input-label">Email</label>
            <input type="email" className="input-field input-max-width" onChange={this.update('email')} value={this.state.email}/>
          </div>
          <div className="edit-label">
            <label className="input-label">Bio</label>
            <textarea className="input-field edit-bio input-max-width" onChange={this.update('bio')} defaultValue={this.state.bio}>
            </textarea>
          </div>
          <div className="edit-submit">
            <input className="btn btn-primary" type="submit" value="Make Changes" />
          </div>
        </form>
        <div className="password-error">
          {this.allerrors}
        </div>
        <div className="password-confirm">
          {this.allerrors.length === 0 && this.state.sent ? "Changes have been Saved" : "" }
        </div>
      </div>
    );
  }
  return(<div></div>);
  }
}

export default EditFormUser;
