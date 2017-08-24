import merge from 'lodash/merge';
import { RECEIVE_USER_ERRORS, RECEIVE_A_USER } from '../actions/users/users_action';


const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_A_USER:
      const newUser = { [action.user.id]: action.user };
      return merge({}, state, newUser);
    case RECEIVE_USER_ERRORS:
        return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default UsersReducer;
