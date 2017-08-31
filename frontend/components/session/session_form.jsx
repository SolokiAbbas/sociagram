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
    let allerrors;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentWillReceiveProps(nextProps){
    if(this.props.formType !== nextProps.formType){
      this.props.clearErrors();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let nextState = this.state;
    nextState.handle= "@" + this.state.username;
    const user = Object.assign({}, nextState );
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render(){
    let allerrors = this.props.errors.map((err, idx) =>{
      return(
        <div className="session-errors">
          <li>{err}</li>
        </div>
      );
    });
    if(this.props.formType === 'login'){
      return(
        <div>
          <img src={window.staticImage.phonelogin} height="440px" width="382px" alt="Log in Phone"/>
        <div className="current-form">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <h2 className="sociagram-title">Sociagram</h2>
            <input className="input-field" placeholder="Username" onChange={this.update('username')} value={this.state.username} />

            <input type="password" className="input-field" placeholder="Password" onChange={this.update('password')} value={this.state.password} />
            <input className="submit-button" type="submit" value="Log in" />
            <br />
            <p className="session-errors">{allerrors}</p>
          </form>
          <div className="login-button">
            <li className="login-spacer">Dont have an account?</li><Link to="/signup">
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
          <h1 className="sociagram-title">Sociagram</h1>
          <h2 className="title-descrip">Sign up to see photos and videos from your friends.</h2>

          <button type="button" className="submit-button" onClick={() => this.props.login({username: "Vegeta2000", password: "password"})}>
            Login with Demo Account
          </button>
          <br />
          <div className="or_section">
            <div className="lines"></div>
            <div className="word_or">or</div>
            <div className="lines"></div>
          </div>
          <input className="input-field" placeholder="Email" onChange={this.update('email')} value={this.state.email} />

          <input className="input-field" placeholder="First Name" onChange={this.update('Fname')} value={this.state.Fname} />

          <input className="input-field" placeholder="Last Name" onChange={this.update('Lname')} value={this.state.Lname} />

          <input className="input-field" placeholder="Username" onChange={this.update('username')} value={this.state.username} />

          <input type="password" className="input-field" placeholder="Password" onChange={this.update('password')} value={this.state.password} />

          <input className="submit-button" type="submit" value="Sign up" />
          <br />
          <p className="error-login">By signing up, you agree to our Terms & Privacy Policy.</p>
          <div className="session-errors">{allerrors}</div>
        </form>
          <div className="login-button">
            <li className="login-spacer">Have an account?</li><Link to="/login" > Log in</Link>
          </div>
      </div>
      </div>
    );
  }
}

export default SessionForm;
