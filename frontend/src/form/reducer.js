import {
  POST_FORM_REQUEST,
  POST_FORM_RECEIVE,
  POST_FORM_CREATE,
  POST_FORM_EDIT
} from './actions';

const initialState = {
  loading: false,
  error: '',
  message: '',
  data: {
    title: '',
    author: '',
    category: '',
    body: ''
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_CREATE:
    case POST_FORM_EDIT:
      return {
        ...state,
        ...action.payload,
      };
    case POST_FORM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_FORM_RECEIVE:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    default:
      return state;
  }
};
