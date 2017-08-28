import React from 'react';
import CommentsFormContainer from '../comments/comments_form_container';
import CommentsItemContainer from '../comments/comments_item_container';
import { Link } from 'react-router-dom';

class PostsIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.handleAddLike = this.handleAddLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.updatePost = this.updatePost.bind(this);
  }
  componentDidMount(){
    const author = this.props.post.author_id;
    if(typeof this.props.users[author] === 'undefined'){
      this.props.fetchAUser(author);
    }
  }

  handleAddLike(){
    let like = {post_id: this.props.post.id, liker_id: this.props.session.currentUser.id};
    this.props.createALike(like);
  }

  handleUnlike(id){
    this.props.deleteALike(id);
  }

  componentWillReceiveProps(nextProps) {
      if(JSON.stringify(this.props.post) !== JSON.stringify(nextProps.post))
      {
          this.updatePost();
      }
  }

  updatePost() {
    const author = this.props.post.author_id;
    if(typeof this.props.users[author] === 'undefined'){
      this.props.fetchAPost(this.props.post.id);
    }
  }

  render(){
    let author = this.props.post.author_id;
    if(this.props.users[author]){
      let ok_match;
      let likeid;
      let match = this.props.post.likes.forEach(like => {
        if(like.liker_id === this.props.session.currentUser.id){
          ok_match = like;
          likeid = like.id;

        }});
      let { post } = this.props;

    return(
    <div className="posts-index-item">
      <ul className="posts-index-item">
        <li>
          {this.props.users[author].id === this.props.session.currentUser.id ? <Link to="/profile">{this.props.users[author].username}</Link> :
            <Link to={`/profile/${this.props.users[author].id}`}>{this.props.users[author].username}</Link>
          }
        </li>
        <li>{this.props.post.title}</li>
          <img src={this.props.post.image_url} alt={this.props.post.title} className="post-images"/>
        <br />
        <li className="posts-body">{this.props.post.body}</li>
      </ul>
      <div>
        <section>
          {ok_match ? <img src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/like-active.png'} onClick={() => this.handleUnlike(likeid)} /> : <img src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/like-inactive.png'} onClick={() => this.handleAddLike()}/>}
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
