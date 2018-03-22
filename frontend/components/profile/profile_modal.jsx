import React from 'react';
import CommentsFormContainer from '../comments/comments_form_container';
import CommentsItemContainer from '../comments/comments_item_container';

class ProfileHover extends React.Component{
  render(){
    let author = this.props.post.author_id;
    return(
      <div className="container">
        <img src={this.props.post.image_url} alt={this.props.post.title} className="post-images"/>
        <img className="user-avatar" src={this.props.users[author].image_url}/>
        <div className="comments-part">
          <CommentsItemContainer post={ this.props.post } />
          <CommentsFormContainer post={ this.props.post } focus={this.state.input} />
        </div>
    </div>
  );
  }
}

export default ProfileHover;
