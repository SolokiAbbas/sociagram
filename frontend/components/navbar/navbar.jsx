import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Search from './search';

class NavBar extends React.Component{

  render(){

    if(typeof this.props.session !== 'undefined'){
    return(
      <div className="parent-nav">
        <ul className="navbar2">
          <div className="logo-container">
            <Link to="/"><img className="logo-image" src={window.staticImage.sociagramlogo} alt="Sociagram"></img></Link>
          </div>
          <Search />
          <div className="top-right-nav2">
            <Link to="/new"><img className="profile-image" src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/add.png'}/></Link>
            <Link to="/profile"><img className="profile-image" src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/avatar.png'}/></Link>
          </div>
        </ul>
      </div>
    );
  }
  return(<div></div>);
  }

}

export default NavBar;
