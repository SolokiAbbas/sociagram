import { RECEIVE_LIKE_ERRORS, RECEIVE_A_LIKE } from '../actions/likes/likes_action';
import merge from 'lodash/merge';

const LikesReducer = (state = {allPosts: {}, errors: {}}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_A_LIKE:
      const newLike = { allPosts: {[state.allPosts[action.post_id]]: action.likes}};
      return merge({}, state, newLike);
    case RECEIVE_LIKE_ERRORS:
        return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default LikesReducer;
