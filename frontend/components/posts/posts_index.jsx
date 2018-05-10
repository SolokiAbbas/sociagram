import React from 'react';
import { Route } from 'react-router-dom';
import PostsIndexItem from './posts_index_item';
import ExploreUser from '../explore/explore_user';


class PostsIndex extends React.Component{
  constructor(){
    super();
    this.randomUsers = [];
  }
  componentDidMount() {
    let currentid = this.props.session.currentUser.id;
    this.props.fetchAllUsers().then(()=>this.props.fetchAUser(currentid)).then(()=>this.props.fetchAllPosts());
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
    let { session, users } = this.props;
    let authorId = session.currentUser.id;
    let currentUserId = this.props.session.currentUser.id;
    if(typeof this.props.users.allUsers !== 'undefined'){
      if(this.randomUsers.length === 0 ){
        this.selectRandom();
      }
    let allposts = Object.keys(this.props.posts).reverse().map(el=> {
      return this.props.posts[el];
    });
    if(typeof users[authorId] !== 'undefined'){
      let allfollowing = Object.keys(this.props.users[authorId].following).map(el=> {
        return this.props.users[authorId].following[el].followee_id;
      });
      if(allfollowing.length === 0){
        return(
          <div className="explorers">
            <ExploreUser user={this.randomUsers[0]} createAFollow={this.props.createAFollow}
              deleteAFollow={this.props.deleteAFollow} fetchAUser={this.props.fetchAUser}
              current={currentUserId} location={this.props.location}
              fetchAllUsers={this.props.fetchAllUsers} />
            <ExploreUser user={this.randomUsers[1]} createAFollow={this.props.createAFollow}
              deleteAFollow={this.props.deleteAFollow} fetchAUser={this.props.fetchAUser}
              current={currentUserId} location={this.props.location}
              fetchAllUsers={this.props.fetchAllUsers} />
            <ExploreUser user={this.randomUsers[2]} createAFollow={this.props.createAFollow}
              deleteAFollow={this.props.deleteAFollow} fetchAUser={this.props.fetchAUser}
              current={currentUserId} location={this.props.location}
              fetchAllUsers={this.props.fetchAllUsers} />
          </div>
      );
      }else{
      return(
          <div className="posts-index">
            {allposts.map(post => {
            if(allfollowing.includes(post.author_id)){
                return (<PostsIndexItem key={post.id} post={ post }
                  session={ session } fetchAUser={this.props.fetchAUser}
                  users={users} deleteALike={this.props.deleteALike} createALike={this.props.createALike}
                  fetchAPost={this.props.fetchAPost} createABookmark={this.props.createABookmark}
                  deleteABookmark={this.props.deleteABookmark} />);
              }})
            }
          </div>
      );
    }
  }
  return(<div></div>);
}else{
  return(<div></div>);
}
  }


}

export default PostsIndex;
