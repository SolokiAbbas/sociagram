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
          <h2>Sociagram</h2>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <input placeholder="Username" onChange={this.update('username')} value={this.state.username} />
            <br />
            <input placeholder="Password" onChange={this.update('password')} value={this.state.password} />
              <br />
            <input type="submit" value="Log in" />
          </form>
          <p> {this.props.errors.join(", ")} </p>
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
        <h2>Sociagram</h2>
        <h4>Sign up to see photos and videos from your friends.</h4>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <input placeholder="Email" onChange={this.update('email')} value={this.state.email} />
            <br />
          <input placeholder="First Name" onChange={this.update('Fname')} value={this.state.Fname} />
            <br />
          <input placeholder="Last Name" onChange={this.update('Lname')} value={this.state.Lname} />
            <br />
          <input placeholder="Username" onChange={this.update('username')} value={this.state.username} />
          <br />
          <input placeholder="Password" onChange={this.update('password')} value={this.state.password} />
            <br />
          <input type="submit" value="Sign up" />
        </form>
        <p> {this.props.errors.join(", ")} </p>
        <p className="error-login">By signing up, you agree to our Terms & Privacy Policy.</p>
          <div className="login-button">
            Have an account? <Link to="/login">Log in</Link>
          </div>
      </div>
    );
  }
}

export default SessionForm;
