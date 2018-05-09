import React from 'react';
import { Link } from 'react-router-dom';


class ExploreUser extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let userId = this.props.user.id;
  return(
    <div className="explore-container">
      <Link className="user-text" to={`/profile/${userId}`}>
          <img className="explore-avatar" src={this.props.user.image_url} /> </ Link>
      <div className="explore-titles">
        <Link className="user-text" to={`/profile/${userId}`}>
          <li>{this.props.user.username}</li> </ Link>
        <li className="explore-name">{this.props.user.Fname} {this.props.user.Lname}</li>
      </div>
      <button className="btn btn-primary follow-button">Follow</button>
    </div>
    );
  }
}

export default ExploreUser;
