import { connect } from 'react-redux';
import React from 'react';
import { fetchAllPosts, fetchAPost, deleteAPost } from '../../actions/posts/posts_action';
import PostsIndex from './posts_index';

const mapStateToProps = (state) =>{
  return {
    posts: state.entities.posts,
    session: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAPost: (id) => dispatch(fetchAPost(id)),
    deleteAPost: (id) => dispatch(deleteAPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
