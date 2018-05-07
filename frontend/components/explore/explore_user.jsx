import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class ExploreUser extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
  return(
    <div>
      <img src={this.props.user.image_url} />
      <li>{this.props.user.username}</li>
      <li>{this.props.user.Fname}</li>
      <li>{this.props.user.Lname}</li>
      <button>Follow</button>
    </div>
    );
  }
}

export default ExploreUser;
