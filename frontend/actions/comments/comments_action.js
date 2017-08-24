import * as ApiUtil from '../../util/comments/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENTS_ERRORS = 'RECEIVE_COMMENTS_ERRORS';
export const RECEIVE_A_COMMENT = "RECEIVE_A_COMMENT";

export const receiveCurrentComments = (comments) => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments,
  };
};
export const receiveAComment = (comment) => {
  return {
    type: RECEIVE_A_COMMENT,
    comment,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_COMMENTS_ERRORS,
    errors,
  };
};

export const fetchAllComments = () => (dispatch) => {
  return (
    ApiUtil.fetchAllComments().then(
      (comments) => dispatch(receiveCurrentComments(comments)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const createAComment = (comment) => (dispatch) => {
  return (
    ApiUtil.createAComment(comment).then(
      (newcomment) => dispatch(receiveAComment(newcomment)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const deleteAComment = (id) => (dispatch) => {
  return (
    ApiUtil.deleteAComment(id).then(
      (comment) => dispatch(receiveCurrentComments(comment)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};
