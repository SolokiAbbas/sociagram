import React from 'react';
import CommentsFormContainer from '../comments/comments_form_container';
import CommentsItemContainer from '../comments/comments_item_container';

class ProfileHover extends React.Component{
  render(){
    let author = this.props.post.author_id;
    console.log(this.props);
    return(
      <div className="modal-container">
          <img className="modal-image" src={this.props.post.image_url} alt={this.props.post.title} />
        <div className="modal-part">
          <img className="user-avatar" src={this.props.user.image_url}/>
          <CommentsItemContainer post={ this.props.post } />
          <CommentsFormContainer post={ this.props.post }  />
        </div>
      </div>
  );
  }
}

export default ProfileHover;
