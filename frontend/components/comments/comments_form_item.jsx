import React from 'react';

const CommentsFormItem = (props) => {
  return(
  <div>
    <ul>
      <li>{props.user[props.comment.author_id]}</li>
      <li>{comment.body}</li>
    </ul>
  </div>
  );
};

export default CommentsFormItem;
