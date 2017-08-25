import merge from 'lodash/merge';
import { RECEIVE_COMMENTS_ERRORS, RECEIVE_A_COMMENT, CLEAR_COMMENTS } from '../actions/comments/comments_action';


const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_A_COMMENT:
      return merge({}, newState, action.comment );
    case CLEAR_COMMENTS:
      return action.comment;
    case RECEIVE_COMMENTS_ERRORS:
        return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default CommentsReducer;
