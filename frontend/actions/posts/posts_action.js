import * as ApiUtil from '../../util/posts/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_A_POST = 'RECEIVE_A_POST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentPost = (posts) => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts,
  };
};
export const receiveAPost = (post) => {
  return {
    type: RECEIVE_A_POST,
    post,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const fetchAllPosts = () => (dispatch) => {
  return (
    ApiUtil.fetchAllPosts().then(
      (posts) => dispatch(receiveCurrentPost(posts)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const fetchAPost = (id) => (dispatch) => {
  return (
    ApiUtil.fetchAPost(id).then(
      (post) => dispatch(receiveAPost(post)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const createAPost = (post) => (dispatch) => {
  return (
    ApiUtil.createAPost(post).then(
      (post) => dispatch(receiveCurrentPost(post)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const deleteAPost = (id) => (dispatch) => {
  return (
    ApiUtil.deleteAPost(id).then(
      (post) => dispatch(receiveCurrentPost(post)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};
