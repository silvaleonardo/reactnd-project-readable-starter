import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_RECEIVE
} from './actions';

const initialState = {
  categories: {
    loading: false,
    error: '',
    list: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return {
        ...state,
        categories: {
          ...state.categories,
          loading: true
        }
      };
    case CATEGORY_LIST_RECEIVE:
      return {
        ...state,
        categories: {
          ...state.categories,
          ...action.payload.categories,
          loading: false
        }
      };
    default:
      return state;
  }
};
