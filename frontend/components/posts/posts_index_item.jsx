import React from 'react';
import CommentsFormContainer from '../comments/comments_form_container';
import CommentsItemContainer from '../comments/comments_item_container';
import { Link } from 'react-router-dom';

class PostsIndexItem extends React.Component {

  componentDidMount(){
    const author = this.props.post.author_id;
    if(typeof this.props.users[author] === 'undefined'){
      this.props.fetchAUser(author);
    }
  }

  render(){
    let author = this.props.post.author_id;
    if(this.props.users[author]){
      let ok_match;
      let match = this.props.post.likes.forEach(like => {
        if(like.liker_id === this.props.session.currentUser.id){
          ok_match = like;
        }});
      let { post } = this.props;
    return(
    <div className="posts-index-item">
      <ul className="posts-index-item">
        <li><Link to={`/profile/${this.props.users[author].id}`}>{this.props.users[author].username}</Link></li>
        <li>{this.props.post.title}</li>
          <img src={this.props.post.image_url} alt={this.props.post.title} className="post-images"/>
        <br />
        <li className="posts-body">{this.props.post.body}</li>
      </ul>
      <div>
        <section>
          {ok_match ? <img src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/like-active.png'} /> : <img src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/like-inactive.png'} />}
        </section>
        {this.props.post.likes.length} Likes
      </div>
      <div className="comments-part">
        <CommentsItemContainer post={ this.props.post } />
        <CommentsFormContainer post={ this.props.post } />
      </div>
    </div>
    );}
    return(<div>Hello</div>);
    }
}

export default PostsIndexItem;
