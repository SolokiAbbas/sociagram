import { connect } from 'react-redux';
import React from 'react';
import { fetchAllPosts, fetchAPost, deleteAPost } from '../../actions/posts/posts_action';
import { createALike, deleteALike } from '../../actions/likes/likes_action';
import { createABookmark, deleteABookmark } from '../../actions/bookmarks/bookmarks_action';
import PostsIndex from './posts_index';
import { fetchAUser, fetchAllUsers } from '../../actions/users/users_action';
import PostsIndexItem from './posts_index_item';
import { createAFollow, deleteAFollow } from '../../actions/follows/follows_action';

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
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAPost: (id) => dispatch(fetchAPost(id)),
    deleteAPost: (id) => dispatch(deleteAPost(id)),
    createAFollow: (follow) => dispatch(createAFollow(follow)),
    deleteAFollow: (id) => dispatch(deleteAFollow(id)),
    createALike: (like) => dispatch(createALike(like)),
    deleteALike: (id) => dispatch(deleteALike(id)),
    createABookmark: (bookmark) => dispatch(createABookmark(bookmark)),
    deleteABookmark: (id) => dispatch(deleteABookmark(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
