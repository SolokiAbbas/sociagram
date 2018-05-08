import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class ExploreUser extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
  return(
    <div className="explore-container">
      <img className="explore-avatar" src={this.props.user.image_url} />
      <div className="explore-titles">
        <li>{this.props.user.username}</li>
        <li className="explore-name">{this.props.user.Fname} {this.props.user.Lname}</li>
      </div>
      <button className="btn btn-primary follow-button">Follow</button>
    </div>
    );
  }
}

export default ExploreUser;
