import uuid from 'uuid/v1';
import request from './requestConfig';

export const create = data =>
  request('/posts', { method: 'POST', body: { id: uuid(), timestamp: Date.now(), ...data } });

export const getAll = (category = null) => (
  !category ?
  request('/posts') :
  request(`/${category}/posts`)
);

export const getById = id =>
  request(`/posts/${id}`);

export const update = (id, data) =>
  request(`/posts/${id}`, { method: 'PUT', body: data });

export const voteById = (id, option) =>
  request(`/posts/${id}`, { method: 'POST', body: { option } });

export const deleteById = id =>
  request(`/posts/${id}`, { method: 'DELETE' });

export const getCommentsById = id =>
  request(`/posts/${id}/comments`);

export default {
  getAll,
  getById,
  voteById,
  deleteById,
  getCommentsById
};
