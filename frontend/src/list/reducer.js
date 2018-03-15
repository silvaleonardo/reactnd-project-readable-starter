import sortBy from 'sort-by';

import {
  POST_LIST_REQUEST,
  POST_LIST_RECEIVE,
  POST_LIST_SORT,
  POST_LIST_VOTE,
  POST_LIST_DELETE
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
    case POST_LIST_VOTE:
      return {
        ...state,
        error: action.payload.error || state.error,
        list: action.payload.error ? state.list : state.list
          .map(item => (item.id === action.payload.post.id ? action.payload.post : item))
      };
    case POST_LIST_DELETE:
      return {
        ...state,
        error: action.payload.error || state.error,
        list: action.payload.error ? state.list : state.list
          .filter(item => item.id !== action.payload.post.id)
      };
    default:
      return state;
  }
};
