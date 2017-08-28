export const createALike = (like) => {
  return $.ajax({
    method: 'POST',
    url: `api/likes/`,
    data: { like }
  });
};

export const deleteALike = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`,
  });
};
