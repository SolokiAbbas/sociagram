import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  users: UsersReducer,
  comments: CommentsReducer,
});

export default rootReducer;
