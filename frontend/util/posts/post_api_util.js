export const fetchAllPosts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts',
  });
};

export const fetchAPost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${id}`,
  });
};

export const deleteAPost = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`,
  });
};
