export const fetchAUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
  });
};

export const updateUser = (user, id) =>{
    return $.ajax({
      method: 'PATCH',
      url: `api/users/${id}`,
      dataType: "json",
      contentType: false,
      processData: false,
      data: user
    });
  };

  export const fetchAllUsers = () => {
    return $.ajax({
      method: 'GET',
      url: `api/users/`,
    });
  };
