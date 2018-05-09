import React from 'react';
import { Route } from 'react-router-dom';
import PostsIndexItem from './posts_index_item';


class PostsIndex extends React.Component{
  componentDidMount() {
    let currentid = this.props.session.currentUser.id;
    this.props.fetchAllPosts().then(()=>this.props.fetchAUser(currentid));
  }

  render(){
    let { session, users } = this.props;
    let authorId = session.currentUser.id;
    let allposts = Object.keys(this.props.posts).reverse().map(el=> {
      return this.props.posts[el];
    });
    if(typeof users[authorId] !== 'undefined'){
      console.log(this.props);
      let allfollowing = Object.keys(this.props.users[authorId].following).map(el=> {
        return this.props.users[authorId].following[el].followee_id;
      });
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
  return(<div></div>);
  }

}

export default PostsIndex;
