import merge from 'lodash/merge';
import { RECEIVE_USER_ERRORS, RECEIVE_A_USER, RECEIVE_ALL_USERS } from '../actions/users/users_action';
import { RECEIVE_A_FOLLOW , DELETE_A_FOLLOW, RECEIVE_FOLLOW_ERRORS } from '../actions/follows/follows_action';


const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_A_USER:
      const newUser = { [action.users.id]: action.users };
      return merge({}, state, newUser);
    case RECEIVE_ALL_USERS:
      return merge({}, newState, { allUsers: action.users });
    case RECEIVE_A_FOLLOW:
      newState[action.follow.follower_id].following.push( {followee_id: action.follow.followee_id} );
      newState[action.follow.followee_id].followers.push( {follower_id: action.follow.follower_id} );
      newState.allUsers[action.follow.follower_id].following.push( {followee_id: action.follow.followee_id} );
      newState.allUsers[action.follow.followee_id].followers.push( {follower_id: action.follow.follower_id} );
      return newState;
    case DELETE_A_FOLLOW:
      let removeIdx;
        newState[action.followee.follower_id].following.forEach((follow, idx) => {
          if(follow.followee_id === action.followee.followee_id){
            removeIdx = idx;}});
          newState[action.followee.follower_id].following.splice(removeIdx, 1);

          newState[action.followee.followee_id].followers.forEach((follow, idx) => {
            if(follow.follower_id === action.followee.follower_id){
              removeIdx = idx;}});
          newState[action.followee.followee_id].followers.splice(removeIdx, 1);

        newState.allUsers[action.followee.follower_id].following.forEach((follow, idx) => {
          if(follow.followee_id === action.followee.followee_id){
            removeIdx = idx;}});
          newState.allUsers[action.followee.follower_id].following.splice(removeIdx, 1);

          newState.allUsers[action.followee.followee_id].followers.forEach((follow, idx) => {
            if(follow.follower_id === action.followee.follower_id){
              removeIdx = idx;}});
          newState.allUsers[action.followee.followee_id].followers.splice(removeIdx, 1);
        return newState;
    case RECEIVE_USER_ERRORS:
        return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default UsersReducer;
