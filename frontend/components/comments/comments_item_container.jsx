import { connect } from 'react-redux';
import React from 'react';
import { fetchAComment, deleteAComment } from '../../actions/comments/comments_action';
import CommentsItem from './comments_item';
import { fetchAUser } from '../../actions/comments/comments_action';

const mapStateToProps = (state) =>{
  return {
    post: state.post,
    comments: state.entities.comments,
    users: state.users,
    session: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    fetchAComment: (id) => dispatch(fetchAComment(id)),
    deleteAComment: (id) => dispatch(deleteAComment(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsItem);
