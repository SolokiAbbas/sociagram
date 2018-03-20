import React from 'react';

const profileHover = (props) => {
  return(
    <div>
      <div className="ion-ios-heart-outline">{props.likes}</div>
      <div className="ion-ios-chatbubble-outline">{props.comments}</div>
    </div>
  );
};

export default profileHover;
