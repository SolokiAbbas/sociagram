import React from 'react';
import CommentsFormContainer from '../comments/comments_form_container';
import CommentsItemContainer from '../comments/comments_item_container';
import { Link } from 'react-router-dom';

class ProfileHover extends React.Component{

  handleCommentClick(id){
    $(`#click-here-${id}`).focus();
  }

  handleAddLike(){
    let like = {post_id: this.props.post.id, liker_id: this.props.user.id};
    this.props.createALike(like);
  }

  handleUnlike(id){
    this.props.deleteALike(id);
  }

  render(){
    let author = this.props.post.author_id;
    let ok_match;
    let likeid;
    let match = this.props.post.likes.forEach(like => {
      if(like.liker_id === this.props.user.id){
        ok_match = like;
        likeid = like.id;
      }});
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
          <div className="modal-post-body">
            <Link className="user-text" data-dismiss="modal" to="/profile">{this.props.user.username}</Link>
            <li className="posts-body-body">{this.props.post.body}</li>
          </div>
          <div className="modal-item-container">
              <CommentsItemContainer post={ this.props.post } />
          </div>

          <div className="modal-likes-container">
            <div>
              {ok_match ? <img className="heart-active" src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/like-active.png'} onClick={() => this.handleUnlike(likeid)} /> : <img className="heart-inactive" src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/like-inactive.png'} onClick={() => this.handleAddLike()}/>}
              <img className="bubble" onClick={() => this.handleCommentClick(this.props.post.id)} src={"https://s3.amazonaws.com/sociagram-dev/posts/icons/comment-bubble.png"}/>
            </div>
            <div className="single-counter-likes">
              {this.props.post.likes.length} Likes
            </div>
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
