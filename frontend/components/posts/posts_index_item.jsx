import React from 'react';


const PostsIndexItem = ({ post, session }) => {

  if(typeof session !== 'undefined'){
  return(
  <div>
    <ul className="posts-index-item">
      <li>{session.currentUser.username}</li>
      <li>{post.title}</li>
      <li>PlaceHolder For Images</li>
      <br />
      <li className="posts-body">{post.body}</li>
    </ul>
  </div>
  );}
  return(<div></div>)
};

export default PostsIndexItem;
