import * as ApiUtil from '../../util/bookmark/bookmark_api_util';
export const RECEIVE_A_BOOKMARK = 'RECEIVE_A_BOOKMARK';
export const DELETE_A_BOOKMARK = 'DELETE_A_BOOKMARK';
export const RECEIVE_BOOKMARK_ERRORS = 'RECEIVE_BOOKMARK_ERRORS';

export const receiveABookmark = (bookmarks) => {
  return {
    type: RECEIVE_A_BOOKMARK,
    bookmarks,
  };
};

export const removeABookmark = (bookmarks) => {
  return {
    type: DELETE_A_BOOKMARK,
    bookmarks,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_BOOKMARK_ERRORS,
    errors,
  };
};


export const createABookmark = (bookmark) => (dispatch) => {
  return (
    ApiUtil.createABookmark(bookmark).then(
      (newbookmark) => dispatch(receiveABookmark(newbookmark)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const deleteABookmark = (id) => (dispatch) => {
  return (
    ApiUtil.deleteABookmark(id).then(
      (bookmark) => dispatch(removeABookmark(bookmark)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};
