export const createABookmark = (bookmark) => {
  return $.ajax({
    method: 'POST',
    url: `api/bookmarks/`,
    data: { bookmark }
  });
};

export const deleteABookmark = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookmarks/${id}`,
  });
};
