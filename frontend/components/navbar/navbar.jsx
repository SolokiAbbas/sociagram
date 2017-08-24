import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{

  render(){

    if(typeof this.props.session !== 'undefined'){
    return(
      <div className="parent-nav">
        <ul className="navbar">
          <Link to="/"><img src={window.staticImage.sociagramlogo} alt="Sociagram"></img></Link>
          <input className="navbar-search" type="text" placeholder="Search"></input>
          <button className="nav-new"><Link to="/new">New Post</Link></button>
          <button className="nav-logout" onClick={this.props.logout}> Log Out </button>
        </ul>
      </div>
    );
  }
  return(<div></div>);
  }

}

export default NavBar;
