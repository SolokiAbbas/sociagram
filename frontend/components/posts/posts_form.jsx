import React from 'react';
import { Redirect } from 'react-router-dom';

class PostsForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      redirect: false,
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let nextState = this.state;
    const post = Object.assign({}, nextState );
    this.props.createAPost(post);
    this.setState({redirect: true});
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render(){
    if(this.state.redirect === false){
    return(
    <form className="posts-form" onSubmit={this.handleSubmit}>
        <input className="input-field" placeholder="title" onChange={this.update('title')} value={this.state.username} />
        <textarea className="input-field" placeholder="body" onChange={this.update('body')}>{this.state.username}</textarea>
        <input className="submit-button" type="submit" value="Make Post" />
    </form>
  );} else {
    return(<Redirect to="/"/>);
  }
  }
}
export default PostsForm;
