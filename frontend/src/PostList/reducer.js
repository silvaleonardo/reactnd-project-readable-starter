import { POST_LIST_REQUEST, POST_LIST_RECEIVE } from './actions';

const initialState = {
  loading: false,
  error: '',
  list: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case POST_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case POST_LIST_RECEIVE:
      return {
        ...state,
        loading: false,
        error: action.error,
        list: action.data
      };
    default:
      return state;
  }
};
