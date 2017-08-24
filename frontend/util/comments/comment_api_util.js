export const fetchAllComments = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/comments',
  });
};

export const createAComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: `api/comments/`,
    data: { comment }
  });
};

export const deleteAPost = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`,
  });
};
