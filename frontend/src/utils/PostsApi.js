import request from './requestConfig';

export const getAll = (category = null) => (
  !category ?
  request('/posts') :
  request(`/${category}/posts`)
);

export const voteById = (id, option) =>
  request(`/posts/${id}`, { method: 'POST', body: { option } });

export const deleteById = id =>
  request(`/posts/${id}`, { method: 'DELETE' });
