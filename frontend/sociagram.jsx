import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiUtil from './util/session/session_api_util';
import configureStore from './store/store';
import * as ApiActions from './actions/session/session_actions';
import Root from './components/root';
import {fetchAllPosts, fetchAPost, deleteAPost} from './util/posts/post_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
      store = configureStore(preloadedState);
      delete window.currentUser;
  } else {
      store = configureStore();
  }
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

window.fetchAllPosts = fetchAllPosts;
window.fetchAPost = fetchAPost;
window.deleteAPost = deleteAPost;
