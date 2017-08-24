import { connect } from 'react-redux';
import React from 'react';
import { createAComment, fetchAllComments, deleteAComment } from '../../actions/comments/comments_action';
import CommentsForm from './comments_form';
import { fetchAUser } from '../../actions/comments/comments_action';

const mapStateToProps = (state) =>{
  return {
    comments: state.entities.comments,
    user: state.user
    session: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    fetchAllComments: () => dispatch(fetchAllComments()),
    createAComment: (comment) => dispatch(createAComment(comment)),
    deleteAComment: (id) => dispatch(deleteAComment(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsForm);
