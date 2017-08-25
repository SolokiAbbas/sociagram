import React from 'react';
import { Route } from 'react-router-dom';
import PostsIndexItem from './posts_index_item';

class PostsIndex extends React.Component{
  componentWillMount() {
    this.props.fetchAllPosts();
  }

  render(){
    let { session, users } = this.props;
    let allposts = Object.keys(this.props.posts).reverse().map(el=> {
      return this.props.posts[el];
    });
    if(typeof session !== 'undefined'){
    return(
      <div className="posts-index">
        {allposts.map(post => <PostsIndexItem key={post.id} post={ post }
          session={ session } fetchAUser={this.props.fetchAUser}
          users={users}/>)}
      </div>
    );
  }
  return(<div></div>);
  }

}

export default PostsIndex;
