import { connect } from 'react-redux';
import React from 'react';
import Explore from './explore';
import { allPost } from '../../reducers/selectors';
import { fetchAComment } from '../../actions/comments/comments_action';
import { allComments } from '../../reducers/selectors';
import { fetchAllPosts } from '../../actions/posts/posts_action';
import { fetchAllUsers, fetchAUser } from '../../actions/users/users_action';
import { createAFollow, deleteAFollow } from '../../actions/follows/follows_action';
import { createALike, deleteALike } from '../../actions/likes/likes_action';
import { createABookmark, deleteABookmark } from '../../actions/bookmarks/bookmarks_action';

const mapStateToProps = (state) =>{
  return {
    session: state.session,
    users: state.entities.users,
    comments: allComments(state.entities),
    allPosts: allPost(state.entities.posts),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    fetchAComment: (id) => dispatch(fetchAComment(id)),
    createAFollow: (follow) => dispatch(createAFollow(follow)),
    deleteAFollow: (id) => dispatch(deleteAFollow(id)),
    createALike: (like) => dispatch(createALike(like)),
    deleteALike: (id) => dispatch(deleteALike(id)),
    createABookmark: (bookmark) => dispatch(createABookmark(bookmark)),
    deleteABookmark: (id) => dispatch(deleteABookmark(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
