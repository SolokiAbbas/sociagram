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

export const createAPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: `api/posts/`,
    dataType: "json",
    contentType: false,
    processData: false,
    data: post
  });
};

export const deleteAPost = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`,
  });
};
