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
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }


  render(){

    if(this.props.formType === 'login'){
      return(
        <div>
          <img src={window.staticImage.phonelogin} height="440px" width="382px" alt="Log in Phone"/>
        <div className="current-form">
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <h2 className="sociagram-title">Sociagram</h2>
            <input className="input-field" placeholder="Username" onChange={this.update('username')} value={this.state.username} />

            <input type="password" className="input-field" placeholder="Password" onChange={this.update('password')} value={this.state.password} />
            <input className="submit-button" type="submit" value="Log in" />
            <br />
            <p className="errors-display"> {this.props.errors.join(", ")} </p>
          </form>
          <div className="login-button">
            <li className="login-spacer">Don't have an account?</li><Link to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      );
    }
    return (
      <div>
        <img src={window.staticImage.phonelogin} height="440px" width="382px" alt="Log in Phone"/>
      <div className="current-form">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h2 className="sociagram-title">Sociagram</h2>
          <h4 className="title-descrip">Sign up to see photos and videos from your friends.</h4>

          <button className="submit-button" onClick={() => this.props.login({username: "tester", password: "password"})}>
            Login Demo
          </button>
          <br />
          <input className="input-field" placeholder="Email" onChange={this.update('email')} value={this.state.email} />

          <input className="input-field" placeholder="First Name" onChange={this.update('Fname')} value={this.state.Fname} />

          <input className="input-field" placeholder="Last Name" onChange={this.update('Lname')} value={this.state.Lname} />

          <input className="input-field" placeholder="Username" onChange={this.update('username')} value={this.state.username} />

          <input type="password" className="input-field" placeholder="Password" onChange={this.update('password')} value={this.state.password} />

          <input className="submit-button" type="submit" value="Sign up" />
          <br />
          <p className="error-login">By signing up, you agree to our Terms & Privacy Policy.</p>
          <div className="errors-display">{this.props.errors.join(", ")}</div>
        </form>
          <div className="login-button">
            <li className="login-spacer">Have an account?</li><Link to="/login"> Log in</Link>
          </div>
      </div>
      </div>
    );
  }
}

export default SessionForm;
