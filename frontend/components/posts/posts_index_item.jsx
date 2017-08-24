import React from 'react';


const PostsIndexItem = ({ post, session }) => {

  if(typeof session !== 'undefined'){
  return(
  <div>
    <ul className="posts-index-item">
      <li>{session.currentUser.username}</li>
      <li>{post.title}</li>
        <img src={post.image_url} alt={post.title}/>
      <br />
      <li className="posts-body">{post.body}</li>
    </ul>
  </div>
  );}
  return(<div>Hello</div>);
};

export default PostsIndexItem;
