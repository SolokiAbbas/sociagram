import React from 'react';
import CommentsFormContainer from '../comments/comments_form_container';
import CommentsItemContainer from '../comments/comments_item_container';
import { Link } from 'react-router-dom';

class ProfileHover extends React.Component{
  constructor(props){
    super(props);
    this.now = new Date();
    this.created = "";
    this.handleDate = this.handleDate.bind(this);
    this.handleAddLike = this.handleAddLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.handleCommentClick = this.handleCommentClick.bind(this);
    this.handleRemoveBookmark = this.handleRemoveBookmark.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
  }

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

  handleAddBookmark(){
    let bookmark = {post_id: this.props.post.id, user_id: this.props.session.currentUser.id};
    this.props.createABookmark(bookmark);
  }

  handleRemoveBookmark(id){
    this.props.deleteABookmark(id);
  }

  handleDate(){
    let tempTime = this.now - new Date(this.props.post.created_at);
    let tempTimehr = Math.floor(tempTime/(1000*60*60));
    let tempTimedy = Math.floor(tempTime/(1000*60*60*24));
    if(tempTimehr < 24){
      this.created = tempTimehr.toString() + " hours ago";
    } else if(tempTimehr > 24 && tempTimehr < 48){
      this.created = "1 day ago";
    } else {
      this.created = tempTimedy.toString() + " days ago";
    }
  }

  render(){
    let author = this.props.post.author_id;
    let likeid;
    let ok_match;
    let match = this.props.post.likes.forEach(like => {
      if(like.liker_id === this.props.session.currentUser.id){
        ok_match = like;
        likeid = like.id;
      }});
      let ok_bookmark;
      let bookmarkid;
      let book = this.props.post.bookmarks.forEach(bookmark => {
        if(bookmark.user_id === this.props.session.currentUser.id){
          ok_bookmark = bookmark;
          bookmarkid = bookmark.id;
        }});

      this.handleDate();
    return(
      <div className="modal-container">
        <div>
          <img className="modal-image" src={this.props.post.image_url} alt={this.props.post.title} />
        </div>
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
                {ok_bookmark ? <img className="bookmark-modal" src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/bookmark-black.png'}
                    onClick={() => this.handleRemoveBookmark(bookmarkid)} data-toggle="tooltip" data-placement="top" title="Bookmark"/> :
                    <img className="bookmark-modal" src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/bookmark-white.png'} onClick={() => this.handleAddBookmark()}
                      data-toggle="tooltip" data-placement="top" title="Bookmark"/>}
            </div>
            <div className="single-counter-likes">
              {this.props.post.likes.length} Likes
            </div>
            <div className="date-profile">
              {this.created}
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
