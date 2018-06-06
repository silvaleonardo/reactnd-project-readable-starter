import {
  POST_DETAILS_REQUEST,
  POST_DETAILS_RECEIVE,
  POST_DETAILS_COMMENTS_REQUEST,
  POST_DETAILS_COMMENTS_RECEIVE,
  POST_DETAILS_VOTE,
  POST_DETAILS_DELETE,
  POST_DETAILS_COMMENT_CREATE,
  POST_DETAILS_COMMENT_EDIT,
  POST_DETAILS_COMMENT_VOTE,
  POST_DETAILS_COMMENT_DELETE
} from './actions';

const initialState = {
  post: {
    loading: false,
    error: '',
    data: null,
  },
  comments: {
    loading: false,
    error: '',
    data: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return {
        ...state,
        post: {
          ...state.post,
          loading: true
        }
      };
    case POST_DETAILS_RECEIVE:
      return {
        ...state,
        post: {
          ...state.post,
          ...action.payload,
          loading: false
        }
      };
    case POST_DETAILS_COMMENTS_REQUEST:
      return {
        ...state,
        comments: {
          ...state.comments,
          loading: true
        }
      };
    case POST_DETAILS_COMMENTS_RECEIVE:
      return {
        ...state,
        comments: {
          ...state.comments,
          ...action.payload,
          loading: false
        }
      };
    case POST_DETAILS_VOTE:
    case POST_DETAILS_DELETE:
      return {
        ...state,
        post: {
          ...state.post,
          ...action.payload
        }
      };
    case POST_DETAILS_COMMENT_CREATE:
      return {
        ...state,
        comments: {
          ...state.comments,
          data: [...state.comments.data, action.payload.data]
        }
      };
    case POST_DETAILS_COMMENT_EDIT:
    case POST_DETAILS_COMMENT_VOTE:
    case POST_DETAILS_COMMENT_DELETE:
      return {
        ...state,
        comments: {
          ...state.comments,
          data: state.comments.data.map(comment =>
            comment.id === action.payload.data.id ? action.payload.data : comment)
        }
      };
    default:
      return state;
  }
};
