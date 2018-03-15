import { getAll, voteFromId, deleteFromId } from '../utils/PostsApi';

export const POST_LIST_REQUEST = 'POST_LIST_REQUEST';
export const POST_LIST_RECEIVE = 'POST_LIST_RECEIVE';
export const POST_LIST_SORT = 'POST_LIST_SORT';
export const POST_LIST_VOTE = 'POST_LIST_VOTE';
export const POST_LIST_DELETE = 'POST_LIST_DELETE';

export const getPosts = (dispatch, category = null) => {
  dispatch({ type: POST_LIST_REQUEST });

  getAll(category)
    .then(list => dispatch({
      type: POST_LIST_RECEIVE,
      payload: { list }
    }))
    .catch(() => dispatch({
      type: POST_LIST_RECEIVE,
      payload: { error: 'There was a problem fetching posts, try again later!' }
    }));
};

export const sortPosts = (dispatch, orderBy) =>
  dispatch({
    type: POST_LIST_SORT,
    payload: orderBy
  });

export const votePost = (dispatch, id, option) =>
  voteFromId(id, option)
    .then(post => dispatch({
      type: POST_LIST_VOTE,
      payload: { post }
    }))
    .catch(() => dispatch({
      type: POST_LIST_VOTE,
      payload: { error: 'There was a problem to vote in post, try again later!' }
    }));

export const deletePost = (dispatch, id) => deleteFromId(id)
  .then(post => dispatch({
    type: POST_LIST_DELETE,
    payload: { post }
  }))
  .catch(() => dispatch({
    type: POST_LIST_DELETE,
    payload: { error: 'There was a problem to delete post, try again later!' }
  }));
