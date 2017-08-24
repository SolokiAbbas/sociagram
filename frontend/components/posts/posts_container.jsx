import { connect } from 'react-redux';
import React from 'react';
import { fetchAllPosts, fetchAPost, deleteAPost } from '../../actions/posts/posts_action';
import PostsIndex from './posts_index';
import { fetchAUser } from '../../actions/users/users_action';

const mapStateToProps = (state) =>{
  return {
    posts: state.entities.posts.allPosts,
    session: state.session,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAPost: (id) => dispatch(fetchAPost(id)),
    deleteAPost: (id) => dispatch(deleteAPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
