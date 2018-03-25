import React from 'react';
import CommentsFormContainer from '../comments/comments_form_container';
import CommentsItemContainer from '../comments/comments_item_container';

class ProfileHover extends React.Component{

  handleCommentClick(id){
    $(`#click-here-${id}`).focus();
  }
  
  handleAddLike(){
    let like = {post_id: this.props.post.id, liker_id: this.props.session.currentUser.id};
    this.props.createALike(like);
  }

  handleUnlike(id){
    this.props.deleteALike(id);
  }

  render(){
    let author = this.props.post.author_id;
    console.log(this.props);
    return(
      <div className="modal-container">
          <img className="modal-image" src={this.props.post.image_url} alt={this.props.post.title} />
        <div className="modal-part">
          <div  className="modal-avatar-container modal-border">
            <img className="modal-avatar" src={this.props.user.image_url}/>
            <div className="post-container-title-user modal-padding">
              <div className="user-text">
                {this.props.user.username}
              </div>
              <li className="post-title-single">{this.props.post.title}</li>
            </div>
          </div>
          <div>
            <img className="bubble" onClick={() => this.handleCommentClick(this.props.post.id)} src={"https://s3.amazonaws.com/sociagram-dev/posts/icons/comment-bubble.png"}/>
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
