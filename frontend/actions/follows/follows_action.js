import * as ApiUtil from '../../util/follows/follow_api_util';
export const RECEIVE_A_FOLLOW = 'RECEIVE_A_FOLLOW';
export const DELETE_A_FOLLOW = 'DELETE_A_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';

export const receiveAFollow = (follow) => {
  return {
    type: RECEIVE_A_FOLLOW,
    follow,
  };
};

export const removeAFollow = (followee) => {
  return {
    type: DELETE_A_FOLLOW,
    followee,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_FOLLOW_ERRORS,
    errors,
  };
};


export const createAFollow = (follow) => (dispatch) => {
  return (
    ApiUtil.createAFollow(follow).then(
      (newfollow) => dispatch(receiveAFollow(newfollow)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const deleteAFollow = (id) => (dispatch) => {
  return (
    ApiUtil.deleteAFollow(id).then(
      (followee) => dispatch(removeAFollow(followee)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};
