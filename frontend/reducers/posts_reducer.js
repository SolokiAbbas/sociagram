import { RECEIVE_POST_ERRORS, RECEIVE_ALL_POSTS, RECEIVE_A_POST,  DELETE_A_POST} from '../actions/posts/posts_action';
import { RECEIVE_A_LIKE, DELETE_A_LIKE } from '../actions/likes/likes_action';
import { RECEIVE_A_BOOKMARK, DELETE_A_BOOKMARK } from '../actions/bookmarks/bookmarks_action';
import merge from 'lodash/merge';

const PostsReducer = (state = {allPosts: {}, errors: {}}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, newState, { allPosts: action.posts });
    case RECEIVE_A_POST:
      const newPost = { allPosts: {[action.post.id]: action.post }};
      return merge({}, state, newPost);
    case DELETE_A_POST:
      delete newState.allPosts[action.post.id];
      return newState;
    case RECEIVE_A_LIKE:
      newState.allPosts[action.like.post_id].likes.push(action.like);
      return newState;
    case DELETE_A_LIKE:
      const newLikes = newState.allPosts[action.like.post_id].likes.filter(like => like.id !== action.like.id);
      newState.allPosts[action.like.post_id].likes = newLikes;
      return newState;
    case RECEIVE_A_BOOKMARK:
      newState.allPosts[action.bookmarks.post_id].bookmarks.push(action.bookmarks);
      return newState;
    case DELETE_A_BOOKMARK:
      const newBookmarks = newState.allPosts[action.bookmarks.post_id].bookmarks.filter(bookmark => bookmark.id !== action.bookmarks.id);
      newState.allPosts[action.bookmarks.post_id].bookmarks = newBookmarks;
      return newState;
    case RECEIVE_POST_ERRORS:
        return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default PostsReducer;
