import uuid from 'uuid/v1';
import request from './requestConfig';

export const create = data =>
  request('/comments', { method: 'POST', body: { id: uuid(), ...data } });

export const getById = id =>
  request(`/comments/${id}`);

export const updateById = (id, body) =>
  request(`/comments/${id}`, { method: 'PUT', body });

export const voteById = (id, option) =>
  request(`/comments/${id}`, { method: 'POST', body: { option } });

export const deleteById = id =>
  request(`/comments/${id}`, { method: 'DELETE' });

export default {
  create,
  getById,
  updateById,
  voteById,
  deleteById
};
