import * as ApiUtil from '../../util/likes/like_api_util';
export const RECEIVE_A_LIKE = 'RECEIVE_A_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';

export const receiveALike = (like) => {
  return {
    type: RECEIVE_A_LIKE,
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
    ApiUtil.createAPost(like).then(
      (newlike) => dispatch(receiveALike(newlike)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const deleteALike = (id) => (dispatch) => {
  return (
    ApiUtil.deleteAPost(id).then(
      (like) => dispatch(receiveALike(like)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};
