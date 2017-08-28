import React from 'react';
import CommentsItem from '../comments/comments_item';

class CommentsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchAComment(this.props.post.id);
  }


  render(){
    let { session, users, post } = this.props;

    if(typeof session !== 'undefined'){

    return(
      <div className="comment-container">
        {this.props.comments.map(comment => <CommentsItem key={comment.id}
          session={ session } fetchAUser={ this.props.fetchAUser } comment={ comment }
          users={ users } post={ post } deleteAComment={this.props.deleteAComment}
          fetchAComment={this.props.fetchAComment}/>)}
      </div>
      );
    }
    return(<div>Comment Index</div>);
  }
}

export default CommentsIndex;
