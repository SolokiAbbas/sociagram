import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Profile extends React.Component{

  handleFollow(id){
    let follow = {followee_id: id};
    this.props.createAFollow(follow);
  }

  handleUnfollow(id){
    let followid;
    let other = parseInt(this.props.clicked_user.slice(8));
    this.props.users[other].followees.forEach(follow =>{
      if(follow.follower_id === this.props.session.currentUser.id){
        followid = follow.id;
      }
    });
    this.props.deleteAFollow(followid);
  }

  render(){
    let other = parseInt(this.props.clicked_user.slice(8));
    let current = this.props.users[other];
    let followid;
    if(typeof current === 'undefined' && !isNaN(other)){
      this.props.fetchAUser(other);
    }
    if (this.props.clicked_user === "profile"){
      return(
        <section className="profile-section">
          <div>
              <img src={this.props.session.currentUser.image_url}/>
          </div>
          <div className="profile-stat-rows">
              <div className="stats-user">{this.props.session.currentUser.username}</div>
              <div>
                <ul className="stats-user">
                  <li>Posts</li>
                  <li>Follows</li>
                  <li>Followers</li>
                </ul>
              </div>
              <div className="stats-user">
                <div>{this.props.session.currentUser.Fname}</div>
                <div>{this.props.session.currentUser.Lname}</div>
            </div>
            <button className="logout-profile" onClick={this.props.logout}>Log Out</button>
          </div>
        </section>
      );
    }else if(!current){
      return(<div></div>);
    }else
    {      this.props.users[other].followees.forEach(follow =>{
            if(follow.follower_id === this.props.session.currentUser.id){
              followid = follow.id;
            }
          });
    return(
      <section className="profile-section">
        <div>
            <img src={current.image_url}/>
        </div>
        <div className="profile-stat-rows">
            <div className="stats-user">{current.username}</div>
            <div>
              <ul className="stats-user">
                <li>Posts</li>
                <li>
                  {followid ? <button onClick={() => this.handleUnfollow()}>UnFollow</button> : <button onClick={() => this.handleFollow(current.id)}>Follow</button>}
                </li>
              </ul>
            </div>
            <div className="stats-user">
              <div>{current.Fname}</div>
              <div>{current.Lname}</div>
          </div>
        </div>
      </section>
    );
  }}

}

export default Profile;
