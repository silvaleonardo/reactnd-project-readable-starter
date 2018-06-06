import { create, getById, update } from '../utils/PostsApi';

export const POST_FORM_REQUEST = 'POST_FORM_REQUEST';
export const POST_FORM_RECEIVE = 'POST_FORM_RECEIVE';
export const POST_FORM_CREATE = 'POST_FORM_CREATE';
export const POST_FORM_EDIT = 'POST_FORM_EDIT';
export const POST_FORM_CLEAN = 'POST_FORM_CLEAN';

export const createPost = (dispatch, data) =>
  create(data)
    .then(() => dispatch({
      type: POST_FORM_CREATE,
      payload: { message: 'Post create with success!' }
    }))
    .catch(() => dispatch({
      type: POST_FORM_CREATE,
      payload: { error: 'There was a problem to create post, try again later!' }
    }));

export const getPostById = (dispatch, id) => {
  dispatch({ type: POST_FORM_REQUEST });

  getById(id)
    .then(data => dispatch({
      type: POST_FORM_RECEIVE,
      payload: { data }
    }))
    .catch(() => dispatch({
      type: POST_FORM_RECEIVE,
      payload: { error: 'There was a problem fetching post id, try again later!' }
    }));
};

export const editPost = (dispatch, id, data) =>
  update(id, data)
    .then(data => dispatch({
      type: POST_FORM_EDIT,
      payload: { data, message: 'Post edited with success!' }
    }))
    .catch(() => dispatch({
      type: POST_FORM_EDIT,
      payload: { error: 'There was a problem to edit post id, try again later!' }
    }));
