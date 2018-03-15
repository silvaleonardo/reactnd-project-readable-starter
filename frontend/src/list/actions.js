import { getAll } from '../utils/PostsApi';

export const POST_LIST_REQUEST = 'POST_LIST_REQUEST';
export const POST_LIST_RECEIVE = 'POST_LIST_RECEIVE';

export const getPosts = (dispatch) => {
  dispatch({ type: POST_LIST_REQUEST });

  getAll()
    .then(list => dispatch({
      type: POST_LIST_RECEIVE,
      payload: { list }
    }))
    .catch(error => dispatch({
      type: POST_LIST_RECEIVE,
      payload: { error: 'There was a problem fetching posts, try again later!' }
    }));
};
