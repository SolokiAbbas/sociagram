import React from 'react';

const PostsIndexItem = (props) => {
  debugger
  props.fetchAUser(props.post.id);
  if(typeof props.session !== 'undefined'){
  return(
  <div>
    <ul className="posts-index-item">
      <li>{users.username}</li>
      <li>{post.title}</li>
        <img src={post.image_url} alt={post.title} className="post-images"/>
      <br />
      <li className="posts-body">{post.body}</li>
    </ul>
  </div>
  );}
  return(<div>Hello</div>);
};

export default PostsIndexItem;
