export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    dataType: "json",
    contentType: false,
    processData: false,
    data: user,
  });
};

export const signupuser = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user },
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user },
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session',
  });
};
