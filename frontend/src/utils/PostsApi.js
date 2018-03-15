import request from './requestConfig';

export const getAll = () =>
  request('/posts');

export const voteFromId = (id, option) =>
  request(`/posts/${id}`, { method: 'POST', body: { option } });

export const deleteFromId = id =>
  request(`/posts/${id}`, { method: 'DELETE' });
