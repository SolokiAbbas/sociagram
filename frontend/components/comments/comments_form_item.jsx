import React from 'react';

const CommentsFormItem = (props) => {
  return(
  <div>
    <ul>
      <li>{props.user.username}</li>
      <li>{post.title}</li>
        <img src={post.image_url} alt={post.title} className="post-images"/>
      <br />
      <li className="posts-body">{post.body}</li>
    </ul>
  </div>

};

export default CommentsFormItem;
