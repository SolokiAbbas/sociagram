import React from 'react';
import { Link } from 'react-router-dom';

class CommentsItem extends React.Component{

  componentDidMount(){
    const author = this.props.comment.author_id;
    if(typeof this.props.users[author] === 'undefined'){
      this.props.fetchAUser(author);
    }
  }

  componentWillReceiveProps(nextProps) {
      if(JSON.stringify(this.props.comment) !== JSON.stringify(nextProps.comment))
      {
          this.updateComment();
      }
  }

  updateComment() {
    const author = this.props.session.currentUser.id;
    if(typeof this.props.comment[author] === 'undefined'){
      this.props.fetchAComment(this.props.post.id);
    }
  }

  render(){
    let author = this.props.comment.author_id;

    if(this.props.users[author] && this.props.post.id === this.props.comment.post_id){
    return(
      <div className="all-comments">
          <ul className="single-comment">
            <li>
              {this.props.users[author].id === this.props.session.currentUser.id ? <Link className="user-text modal-close" to="/profile">{this.props.users[author].username}</Link> :
                <Link className="user-text modal-close" to={`/profile/${this.props.users[author].id}`}>{this.props.users[author].username}</Link>
              }
            </li>
              <div className="body-comments-container">
                <div className="body-comments">
                  {this.props.comment.body}
                </div>
                <div className="delete-comment">
                  {
                    this.props.users[author].id === this.props.session.currentUser.id ? <img className="delete-x" src={'https://s3.amazonaws.com/sociagram-dev/posts/icons/cross-out.png'} onClick={() => this.props.deleteAComment(this.props.comment.id)}/> : <div></div>
                  }
                </div>
              </div>
          </ul>
      </div>
    );
    }
    return(<div></div>);
  }
}

export default CommentsItem;
