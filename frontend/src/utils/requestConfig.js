export const getToken = () => {
  let token = localStorage.token;

  if (!token) token = localStorage.token = Math.random().toString(36).substr(-10);

  return token;
};

export const headers = {
  Accept: 'application/json',
  Authorization: getToken()
};

console.log(headers);

export const baseUrl = 'http://localhost:3001';

export default (url, opts = {}) => fetch(`${baseUrl}${url}`, Object.assign({}, { headers }, opts));
