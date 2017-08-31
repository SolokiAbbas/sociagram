import merge from 'lodash/merge';
import { RECEIVE_USER_ERRORS, RECEIVE_A_USER } from '../actions/users/users_action';
import { RECEIVE_A_FOLLOW , DELETE_A_FOLLOW, RECEIVE_FOLLOW_ERRORS } from '../actions/follows/follows_action';


const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_A_USER:
      const newUser = { [action.users.id]: action.users };
      return merge({}, state, newUser);
    case RECEIVE_A_FOLLOW:
      newState[action.follow.followee_id].followees.push(action.follow);
      return newState;
    case DELETE_A_FOLLOW:
      const newFollow = newState[action.followee.follower_id].followees.filter(follow => follow.follower_id !== action.followee.follower_id);
      newState[action.followee.follower_id].followees = newFollow;
      return newState;
    case RECEIVE_USER_ERRORS:
        return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default UsersReducer;
