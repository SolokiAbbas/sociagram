export const createALike = (likes) => {
  return $.ajax({
    method: 'POST',
    url: `api/likes/`,
    data: { likes }
  });
};

export const deleteALike = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`,
  });
};
