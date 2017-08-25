import React from 'react';
import { Route } from 'react-router-dom';


class CommentsForm extends React.Component{
  constructor(props) {

    super(props);
    this.state = {
      body: "",
      post_id: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let nextState = this.state;
    const comment = Object.assign({}, nextState );
    this.props.createAComment(comment);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value, post_id: this.props.post.id});
  }

  render(){

    return(
      <form className="posts-form" onSubmit={this.handleSubmit}>
        <textarea className="input-form" placeholder="Add Comments" onChange={this.update('body')}>{this.state.body}</textarea>
      </form>
    );

  }
}

export default CommentsForm;
