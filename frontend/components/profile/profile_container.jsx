import { connect } from 'react-redux';
import React from 'react';
import { logout, receiveErrors } from '../../actions/session/session_actions';
import Profile from './profile';
import { fetchAUser, updateUser, receiveAUser } from '../../actions/users/users_action';
import { fetchAComment } from '../../actions/comments/comments_action';
import { createAFollow, deleteAFollow } from '../../actions/follows/follows_action';
import { allPost } from '../../reducers/selectors';
import { fetchAllPosts, deleteAPost, fetchAPost } from '../../actions/posts/posts_action';
import { allComments } from '../../reducers/selectors';
import { createALike, deleteALike } from '../../actions/likes/likes_action';
import { createABookmark, deleteABookmark } from '../../actions/bookmarks/bookmarks_action';

const mapStateToProps = (state, ownProps) =>{
  return {
    clicked_user: ownProps.match.params.userId,
    comments: allComments(state.entities),
    session: state.session,
    users: state.entities.users,
    allPosts: allPost(state.entities.posts),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (user) => dispatch(logout(user)),
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    fetchAComment: (id) => dispatch(fetchAComment(id)),
    createAFollow: (follow) => dispatch(createAFollow(follow)),
    deleteAFollow: (id) => dispatch(deleteAFollow(id)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAPost: (id) => dispatch(fetchAPost(id)),
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    clearErrors: () => dispatch(receiveErrors([])),
    createALike: (like) => dispatch(createALike(like)),
    deleteALike: (id) => dispatch(deleteALike(id)),
    deleteAPost: (id) => dispatch(deleteAPost(id)),
    createABookmark: (bookmark) => dispatch(createABookmark(bookmark)),
    deleteABookmark: (id) => dispatch(deleteABookmark(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
