import { RECEIVE_POST_ERRORS, RECEIVE_ALL_POSTS, RECEIVE_A_POST } from '../actions/posts/posts_action';
import merge from 'lodash/merge';

const PostsReducer = (state = {allPosts: {}, errors: {}}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, newState, {allPosts: action.posts});
    case RECEIVE_A_POST:
      const newPost = {allPosts: {[action.post.id]: action.post}};
      return merge({}, state, newPost);
    case RECEIVE_POST_ERRORS:
        return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default PostsReducer;
