export const createAFollow = (follows) => {
  return $.ajax({
    method: 'POST',
    url: `api/follows/`,
    data: { follows }
  });
};

export const deleteAFollow = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`,
  });
};
