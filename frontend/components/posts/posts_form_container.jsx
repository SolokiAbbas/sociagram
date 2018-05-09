import { connect } from 'react-redux';
import React from 'react';
import { createAPost } from '../../actions/posts/posts_action';
import PostsForm from './posts_form';

const mapStateToProps = (state) =>{
  return {
    posts: state.entities.posts.allPosts,
    users: state.entities.users,
    session: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAPost: (post) => dispatch(createAPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsForm);
