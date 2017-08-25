import React from 'react';

class CommentsItem extends React.Component{
  componentWillMount() {
    this.props.fetchAComment(this.props.post.id);
  }

  componentDidMount(){
    const author = this.props.comments.author_id;
    if(typeof this.props.users[author] === 'undefined'){
      this.props.fetchAUser(author);
      this.props.fetchAComment(this.props.post.id);
    }
  }

  render(){
    if(this.props.comments[author]){
    return(
  <div>
    <ul>
      <li>{this.props.user[this.props.comment.author_id]}</li>
      <li>{this.props.comment.body}</li>
    </ul>
  </div>
    );
    }
  }
}

export default CommentsItem;
