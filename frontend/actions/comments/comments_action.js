import * as ApiUtil from '../../util/comments/comment_api_util';


export const RECEIVE_COMMENTS_ERRORS = 'RECEIVE_COMMENTS_ERRORS';
export const RECEIVE_A_COMMENT = "RECEIVE_A_COMMENT";
export const REMOVE_A_COMMENT = "REMOVE_A_COMMENT";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";


export const receiveAComment = (comment) => {
  return {
    type: RECEIVE_A_COMMENT,
    comment,
  };
};

export const removeAComment = (comment_id) => {
  return {
    type: REMOVE_A_COMMENT,
    comment_id,
  };
};

export const clearComments = (comment) => {
  return {
    type: CLEAR_COMMENTS,
    comment,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_COMMENTS_ERRORS,
    errors,
  };
};

export const fetchAComment = (post_id) => (dispatch) => {
  return (
    ApiUtil.fetchAComment(post_id).then(
      (comment) => dispatch(receiveAComment(comment)),
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
      (id) => dispatch(removeAComment(id)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};
