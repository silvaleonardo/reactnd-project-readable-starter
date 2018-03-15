import request from './requestConfig';

export const getAll = () =>
  request('/posts')
    .then(res => res.json());

export const voteFromId = (id, option) =>
  request(`/posts/${id}`, { method: 'POST', body: { option } })
    .then(res => res.json());
