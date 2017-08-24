import React from 'react';
import { Route } from 'react-router-dom';


class CommentsForm extends React.Component{
  componentWillMount() {
    this.props.fetchAllComments();
  }

  render(){
    
  }
}

export default CommentsForm;
