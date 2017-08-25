import React from 'react';


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
    return(
    <div>
      <ul className="posts-index-item">
        <li>{this.props.users[author].username}</li>
        <li>{this.props.post.title}</li>
          <img src={this.props.post.image_url} alt={this.props.post.title} className="post-images"/>
        <br />
        <li className="posts-body">{this.props.post.body}</li>
      </ul>
    </div>
    );}
    return(<div>Hello</div>);
    }
}

export default PostsIndexItem;
