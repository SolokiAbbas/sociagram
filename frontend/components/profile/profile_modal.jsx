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
          <div  className="modal-avatar-container">
            <img className="modal-avatar" src={this.props.user.image_url}/>
            <div className="user-text">
              {this.props.user.username}
            </div>
            <li className="post-title-single">{this.props.post.title}</li>
          </div>
          <div className="modal-item-container">
            <CommentsItemContainer post={ this.props.post } />
          </div>
          <div className="modal-form-container">
            <CommentsFormContainer post={ this.props.post }  />
          </div>
        </div>
      </div>
  );
  }
}

export default ProfileHover;
