import { connect } from 'react-redux';
import React from 'react';
import { fetchAllPosts, fetchAPost, deleteAPost } from '../../actions/posts/posts_action';
import { createALike, deleteALike } from '../../actions/likes/likes_action';
import PostsIndex from './posts_index';
import { fetchAUser } from '../../actions/users/users_action';
import PostsIndexItem from './posts_index_item';

const mapStateToProps = (state) =>{
  return {
    posts: state.entities.posts.allPosts,
    session: state.session,
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAPost: (id) => dispatch(fetchAPost(id)),
    deleteAPost: (id) => dispatch(deleteAPost(id)),
    createALike: (like) => dispatch(createALike(like)),
    deleteALike: (id) => dispatch(deleteALike(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
