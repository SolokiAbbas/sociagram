import * as ApiUtil from '../../util/session/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const login = (user) => (dispatch) => {
  return (
    ApiUtil.login(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const logout = () => (dispatch) => {
  return (
    ApiUtil.logout().then(
      () => dispatch(receiveCurrentUser(null)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const signup = (user) => (dispatch) => {
  return (
    ApiUtil.signup(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};
