import sortBy from 'sort-by';

import {
  POST_LIST_REQUEST,
  POST_LIST_RECEIVE,
  POST_LIST_SORT
} from './actions';

const initialState = {
  loading: false,
  error: '',
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case POST_LIST_RECEIVE:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case POST_LIST_SORT:
      return {
        ...state,
        list: [...state.list.sort(sortBy(action.payload))]
      };
    default:
      return state;
  }
};
