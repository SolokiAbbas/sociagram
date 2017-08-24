export const fetchAUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/user/${id}`,
  });
};
