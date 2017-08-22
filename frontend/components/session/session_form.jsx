import React from 'react';
import { Link, Redirect } from 'react-router-dom';



class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      Fname: "",
      Lname: "",
      email: "",
      handle: "@",
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let nextState = this.state;
    nextState.handle="@"+this.state.username;
    const user = Object.assign({}, nextState );
    this.props.processForm(user);
    this.setState({username: '', password: '', handle: '@', Fname: '', Lname: '', email: ''});
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }


  render(){

    if(this.props.formType === 'login' && !this.props.loggedIn){
      return(
        <div>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <h2 className="sociagram-title">Sociagram</h2>
            <input className="input-field" placeholder="Username" onChange={this.update('username')} value={this.state.username} />
            <br />
            <input className="input-field" placeholder="Password" onChange={this.update('password')} value={this.state.password} />
              <br />
            <input type="submit" value="Log in" />
            <p> {this.props.errors.join(", ")} </p>
          </form>
          <div className="signup-button">
            <Link to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div>
        {this.props.loggedIn ? <Redirect to="/" /> : <div></div> }
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h2 className="sociagram-title">Sociagram</h2>
          <h4 className="title-descrip">Sign up to see photos and videos from your friends.</h4>
          <input className="input-field" placeholder="Email" onChange={this.update('email')} value={this.state.email} />
            <br />
          <input className="input-field" placeholder="First Name" onChange={this.update('Fname')} value={this.state.Fname} />
            <br />
          <input className="input-field" placeholder="Last Name" onChange={this.update('Lname')} value={this.state.Lname} />
            <br />
          <input className="input-field" placeholder="Username" onChange={this.update('username')} value={this.state.username} />
          <br />
          <input className="input-field" placeholder="Password" onChange={this.update('password')} value={this.state.password} />
            <br />
          <input type="submit" value="Sign up" />
          <br />
          <p className="error-login">By signing up, you agree to our Terms & Privacy Policy.</p>
          <div>{this.props.errors.join(", ")}</div>
        </form>
          <div className="login-button">
            Have an account? <Link to="/login"> Log in</Link>
          </div>
      </div>
    );
  }
}

export default SessionForm;