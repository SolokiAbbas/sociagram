import { connect } from 'react-redux';
import React from 'react';
import { fetchAComment, deleteAComment, clearComments } from '../../actions/comments/comments_action';
import CommentsIndex from './comments_index';
import { fetchAUser } from '../../actions/users/users_action';
import { allComments } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) =>{
  return {
    post: ownProps.post,
    comments: allComments(state.entities),
    users: state.entities.users,
    session: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    fetchAComment: (id) => dispatch(fetchAComment(id)),
    deleteAComment: (id) => dispatch(deleteAComment(id)),
    clearComments: () => dispatch(clearComments([])),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsIndex);
