import * as ApiUtil from '../../util/users/users_api_util';

export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_A_USER = "RECEIVE_A_USER";

export const receiveAUser = (users) => {
  return {
    type: RECEIVE_A_USER,
    users,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors,
  };
};

export const fetchAUser = (id) => (dispatch) => {
  return (
    ApiUtil.fetchAUser(id).then(
      (user) => dispatch(receiveAUser(user)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const updateUser = (user, id) => (dispatch) => {
  return (
    ApiUtil.updateUser(user, id).then(
      (users) => dispatch(receiveAUser(users)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};
