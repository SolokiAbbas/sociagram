import { connect } from 'react-redux';
import React from 'react';
import { createAComment, fetchAComment } from '../../actions/comments/comments_action';
import CommentsForm from './comments_form';
import { fetchAUser } from '../../actions/users/users_action';

const mapStateToProps = (state, ownProps) =>{
  return {
    post: ownProps.post,
    comments: state.entities.comments,
    users: state.entities.users,
    session: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    fetchAComment: (id) => dispatch(fetchAComment(id)),
    createAComment: (comment) => dispatch(createAComment(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsForm);
