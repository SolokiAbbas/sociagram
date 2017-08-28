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
          <div className="top-right-nav">
            <Link to="/new"><img className="profile-image" src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/add.png'}/></Link>
            <Link to="/profile"><img className="profile-image" src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/avatar.png'}/></Link>
            <button className="nav-logout" onClick={this.props.logout}> Log Out </button>
          </div>
        </ul>
      </div>
    );
  }
  return(<div></div>);
  }

}

export default NavBar;
