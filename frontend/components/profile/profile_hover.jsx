import React from 'react';

class profileHover extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.deleteAPost(this.props.id);
  }

  render(){
      return(
        <div className="p-hover">
          <div className="ion-ios-heart-outline icon-hover">{this.props.likes}</div>
          <div className="ion-ios-chatbubble-outline icon-hover">{this.props.comments}</div>
          <div className="ion-ios-trash-outline icon-hover" onClick={()=>this.handleDelete()}></div>
        </div>
      );
    }
}

export default profileHover;
