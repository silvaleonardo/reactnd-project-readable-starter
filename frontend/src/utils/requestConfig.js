export const getToken = () => {
  let token = localStorage.token;

  if (!token) token = localStorage.token = Math.random().toString(36).substr(-10);

  return token;
};

export const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: getToken()
};

export const baseUrl = 'http://localhost:3001';

export default (url, opts = {}) => {
  if (opts.body && typeof opts.body !== 'string') {
    opts.body = JSON.stringify(opts.body);
  }

  return fetch(`${baseUrl}${url}`, Object.assign({}, { headers }, opts));
};
