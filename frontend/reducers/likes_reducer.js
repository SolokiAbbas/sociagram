import { RECEIVE_A_LIKE, DELETE_A_LIKE, RECEIVE_LIKE_ERRORS } from '../actions/likes/likes_action';
import merge from 'lodash/merge';

const PostsReducer = (state = {allPosts: {}, errors: {}}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_A_LIKE:
      newState.allPosts[action.like.post_id].likes.push(action.like);
      return newState;
    case DELETE_A_LIKE:
      const newLikes = newState.allPosts[action.like.post_id].likes.filter(like => like.id !== action.like.id);
      newState.allPosts[action.like.post_id].likes = newLikes;
      return newState;
    case RECEIVE_LIKE_ERRORS:
        return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default PostsReducer;
