import merge from 'lodash/merge';
import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENTS_ERRORS, RECEIVE_A_COMMENT } from '../actions/posts/posts_action';


const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, newState, action.comments );
    case RECEIVE_A_COMMENT:
      const newComment = { [action.comment.id]: action.comment };
      return merge({}, state, newComment);
    case RECEIVE_COMMENTS_ERRORS:
        return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default CommentsReducer;
