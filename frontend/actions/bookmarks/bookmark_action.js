import * as ApiUtil from '../../util/likes/like_api_util';
export const RECEIVE_A_LIKE = 'RECEIVE_A_LIKE';
export const DELETE_A_LIKE = 'DELETE_A_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';

export const receiveALike = (like) => {
  return {
    type: RECEIVE_A_LIKE,
    like,
  };
};

export const removeALike = (like) => {
  return {
    type: DELETE_A_LIKE,
    like,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_LIKE_ERRORS,
    errors,
  };
};


export const createALike = (like) => (dispatch) => {
  return (
    ApiUtil.createALike(like).then(
      (newlike) => dispatch(receiveALike(newlike)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const deleteALike = (id) => (dispatch) => {
  return (
    ApiUtil.deleteALike(id).then(
      (like) => dispatch(removeALike(like)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};
