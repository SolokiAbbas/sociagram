import { connect } from 'react-redux';
import React from 'react';
import { logout, receiveErrors } from '../../actions/session/session_actions';
import Profile from './profile';
import { fetchAUser, updateUser, receiveAUser } from '../../actions/users/users_action';
import { createAFollow, deleteAFollow } from '../../actions/follows/follows_action';
import { allPost } from '../../reducers/selectors';
import { fetchAllPosts } from '../../actions/posts/posts_action';

const mapStateToProps = (state, ownProps) =>{
  return {
    clicked_user: ownProps.location.pathname.slice(1),
    session: state.session,
    users: state.entities.users,
    allPosts: allPost(state.entities.posts),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (user) => dispatch(logout(user)),
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    createAFollow: (follow) => dispatch(createAFollow(follow)),
    deleteAFollow: (id) => dispatch(deleteAFollow(id)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    clearErrors: () => dispatch(receiveErrors([])),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
