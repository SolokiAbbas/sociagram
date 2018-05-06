import { connect } from 'react-redux';
import React from 'react';
import Explore from './explore';
import { allPost } from '../../reducers/selectors';
import { fetchAComment } from '../../actions/comments/comments_action';
import { fetchAllPosts } from '../../actions/posts/posts_action';
import { fetchAUser } from '../../actions/users/users_action';
import { createAFollow, deleteAFollow } from '../../actions/follows/follows_action';

const mapStateToProps = (state) =>{
  return {
    session: state.session,
    users: state.entities.users,
    allPosts: allPost(state.entities.posts),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    fetchAComment: (id) => dispatch(fetchAComment(id)),
    createAFollow: (follow) => dispatch(createAFollow(follow)),
    deleteAFollow: (id) => dispatch(deleteAFollow(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
