import React from 'react';
import ExploreUser from './explore_user';
import ExplorePosts from './explore_posts';

class Explore extends React.Component{
  constructor(){
    super();
    this.randomUsers = [];
    this.selectRandom = this.selectRandom.bind(this);
  }
  componentDidMount(){
    this.props.fetchAllUsers().then(()=> this.props.fetchAllPosts());
  }

  selectRandom(){
    let userlength = Object.keys(this.props.users.allUsers).length;
    let randomNum1 = Math.floor(Math.random()*userlength);
    let randomNum2 = Math.floor(Math.random()*userlength);
    while(randomNum1 === 1 || randomNum1 === 0){
      randomNum1 = Math.floor(Math.random()*userlength);
    }
    while(randomNum1 === randomNum2 || randomNum2 === 1 || randomNum2 === 0){
      randomNum2 = Math.floor(Math.random()*userlength);
    }
    this.randomUsers.push(this.props.users.allUsers[1]);
    this.randomUsers.push(this.props.users.allUsers[randomNum1]);
    this.randomUsers.push(this.props.users.allUsers[randomNum2]);
  }

  render(){
    if(typeof this.props.users.allUsers !== 'undefined'){
      let currentUserId = this.props.session.currentUser.id;
      this.selectRandom();
    return(
        <div className="exp-container">
          <li className="explorer-header">Discover People</li>
          <div className="explorers">
            <ExploreUser user={this.randomUsers[0]} createAFollow={this.props.createAFollow}
              deleteAFollow={this.props.deleteAFollow} fetchAUser={this.props.fetchAUser}
              current={currentUserId}/>
            <ExploreUser user={this.randomUsers[1]} createAFollow={this.props.createAFollow}
              deleteAFollow={this.props.deleteAFollow} fetchAUser={this.props.fetchAUser}
              current={currentUserId}/>
            <ExploreUser user={this.randomUsers[2]} createAFollow={this.props.createAFollow}
              deleteAFollow={this.props.deleteAFollow} fetchAUser={this.props.fetchAUser}
              current={currentUserId}/>
          </div>
          <li className="explorer-header">Explore</li>
          <ExplorePosts session={this.props.session} allPosts={this.props.allPosts}
            createALike={this.props.createALike} deleteALike={this.props.deleteALike}
            fetchAPost={this.props.fetchAPost} createABookmark={this.props.createABookmark}
            deleteABookmark={this.props.deleteABookmark} comments={this.props.comments}
            fetchAllPosts={this.props.fetchAllPosts} />
        </div>
    );
  }else {
    return(<div></div>);
  }
  }
}

export default Explore;
