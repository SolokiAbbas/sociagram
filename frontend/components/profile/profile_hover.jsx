import React from 'react';

const profileHover = (props) => {
  return(
    <div className="p-hover">
      <div className="ion-ios-heart-outline icon-hover">{props.likes}</div>
      <div className="ion-ios-chatbubble-outline icon-hover">{props.comments}</div>
    </div>
  );
};

export default profileHover;
