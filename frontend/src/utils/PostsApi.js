import request from './requestConfig';

export const getAll = () =>
  request('/posts')
    .then(res => res.json());
