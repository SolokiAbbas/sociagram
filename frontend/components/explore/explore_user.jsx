import React from 'react';
import { Link } from 'react-router-dom';


class ExploreUser extends React.Component{
  constructor(props){
    super(props);
    this.state={followid: 0};
    this.followid = 0;
  }

  componentDidMount(){
    let author = this.props.user.id;
    this.props.fetchAUser(author);
  }
  componentWillReceiveProps(nextProps){
    let other = nextProps.user.followings;
    let current = this.props.user.followings;
    if(other !== current){
        this.props.fetchAUser(current);
    }
  }

  handleFollow(id){
    let follow = {followee_id: id};
    this.followid = id;
    this.props.createAFollow(follow);
  }

  handleUnfollow(){
    let other = this.props.user.id;
    this.followid = 0;
    this.props.deleteAFollow(other);
  }
  handlefollowings(id){
    this.setState({followid: id});
  }

  render(){
    let userId = this.props.user.id;
    this.props.user.followers.forEach(id =>{
      if(id.follower_id === this.props.current){
        this.followid = id;
      }
    });
  return(
    <div className="explore-container">
      <Link className="user-text" to={`/profile/${userId}`}>
          <img className="explore-avatar" src={this.props.user.image_url} /> </ Link>
      <div className="explore-titles">
        <Link className="user-text" to={`/profile/${userId}`}>
          <li>{this.props.user.username}</li> </ Link>
        <li className="explore-name">{this.props.user.Fname} {this.props.user.Lname}</li>
      </div>
      <li>
        {this.followid !== 0 ? <button className="btn btn-primary unfollow-button" onClick={() => this.handleUnfollow()}>Unfollow</button> : <button className="btn btn-primary follow-button" onClick={() => this.handleFollow(userId)}>Follow</button>}
      </li>
    </div>
    );
  }
}

export default ExploreUser;
