export const createABookmark = (bookmarks) => {
  return $.ajax({
    method: 'POST',
    url: `api/bookmarks/`,
    data: { bookmarks }
  });
};

export const deleteABookmark = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookmarks/${id}`,
  });
};
