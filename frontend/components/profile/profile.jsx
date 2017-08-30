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
    let postcounter = 0;
    let followid;

    if(typeof current === 'undefined' && !isNaN(other)){
      this.props.fetchAUser(other);
    }
    if(this.props.allPosts.length === 0){
      this.props.fetchAllPosts();
    }
    if (this.props.clicked_user === "profile"){
          this.props.allPosts.forEach(post =>{

            if(post.author_id === this.props.session.currentUser.id){
              postcounter++;
          }
        });
      return(
        <section className="profile-section">
          <div>
              <img className="user-pic" src={this.props.session.currentUser.image_url}/>
          </div>
          <div className="profile-stat-rows">
              <div className="profile-user">
                {this.props.session.currentUser.username}
                <button className="logout-profile" onClick={this.props.logout}>Edit Profile</button>
              </div>
              <div>
                <ul className="stats-user">
                  <li className="post-counter">{postcounter}Posts</li>
                  <li className="follows-counter">Followers</li>
                  <li className="followers-counter">Following</li>
                </ul>
              </div>
              <div className="profile-name">
                <div className="profile-fname">{this.props.session.currentUser.Fname}</div>
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
          this.props.allPosts.forEach(post =>{
            if(post.author_id === current.id){
              postcounter++;
          }
        });
    return(
      <section className="profile-section">
        <div>
            <img className="user-pic" src={current.image_url}/>
        </div>
        <div className="profile-stat-rows">
            <div className="stats-user">{current.username}</div>
            <div>
              <ul className="stats-user">
                <li>{postcounter}Posts</li>
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
