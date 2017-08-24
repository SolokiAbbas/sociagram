import { RECEIVE_ERRORS, RECEIVE_ALL_POSTS, RECEIVE_A_POST } from '../actions/posts/posts_action';
import merge from 'lodash/merge';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, newState, action.posts);
    case RECEIVE_A_POST:
      const newPost = {[action.post.id]: action.post};
      return merge({}, state, newPost);
    case RECEIVE_ERRORS:
        return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default PostsReducer;
