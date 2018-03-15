import request from './requestConfig';

export const getAll = () =>
  request('/categories');
