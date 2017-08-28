import React from 'react';
import { Link } from 'react-router-dom';

class CommentsItem extends React.Component{

  componentDidMount(){
    const author = this.props.comment.author_id;
    if(typeof this.props.users[author] === 'undefined'){
      this.props.fetchAUser(author);
    }
  }

  render(){
    let author = this.props.comment.author_id;
    if(this.props.users[author] && this.props.post.id === this.props.comment.post_id){
    return(
  <div>
    <ul className="single-comment">
      <li><Link to={`/profile/${this.props.users[author].id}`}>{this.props.users[author].username}</Link></li>
      <li>{this.props.comment.body}</li>
    </ul>
  </div>
    );
    }
    return(<div></div>);
  }
}

export default CommentsItem;
