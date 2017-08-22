import React from 'react';
import { Link, Redirect } from 'react-router-dom';



class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({username: '', password: ''});
  }

  handleUsernameInput(e) {
    this.setState({username: e.currentTarget.value});
  }

  handlePasswordInput(e) {
    this.setState({password: e.currentTarget.value});
  }

  render(){
    return (
      <div>
        {this.props.loggedIn ? <Redirect to="/" /> : <div></div> }
        <h2>{this.props.formType === 'signup' ? "Sign Up" : "Log In"}</h2>
        <form onSubmit={this.handleSubmit}>
          Username <input onChange={this.handleUsernameInput} value={this.state.username} />
            <br />
          Password <input onChange={this.handlePasswordInput} value={this.state.password} />
            <br />
          <input type="submit" value="Submit" />
        </form>
        <p> {this.props.errors} </p>
        <Link to={this.props.formType === 'signup' ? "/login" : "/signup"}>
          {this.props.formType === 'signup' ? "Log In" : "Sign Up"}
        </Link>
      </div>
    );
  }
}

export default SessionForm;
