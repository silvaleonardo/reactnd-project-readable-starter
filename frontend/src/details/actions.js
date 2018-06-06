import postsApi from '../utils/PostsApi';
import commentsApi from '../utils/CommentsApi';

export const POST_DETAILS_REQUEST = 'POST_DETAILS_REQUEST';
export const POST_DETAILS_RECEIVE = 'POST_DETAILS_RECEIVE';
export const POST_DETAILS_COMMENTS_REQUEST = 'POST_DETAILS_COMMENTS_REQUEST';
export const POST_DETAILS_COMMENTS_RECEIVE = 'POST_DETAILS_COMMENTS_RECEIVE';
export const POST_DETAILS_VOTE = 'POST_DETAILS_VOTE';
export const POST_DETAILS_DELETE = 'POST_DETAILS_DELETE';
export const POST_DETAILS_COMMENT_CREATE = 'POST_DETAILS_COMMENT_CREATE';
export const POST_DETAILS_COMMENT_EDIT = 'POST_DETAILS_COMMENT_EDIT';
export const POST_DETAILS_COMMENT_VOTE = 'POST_DETAILS_COMMENT_VOTE';
export const POST_DETAILS_COMMENT_DELETE = 'POST_DETAILS_COMMENT_DELETE';

export const getPostById = (dispatch, id) => {
  dispatch({ type: POST_DETAILS_REQUEST });

  postsApi.getById(id)
    .then(data => dispatch({
      type: POST_DETAILS_RECEIVE,
      payload: { data }
    }))
    .catch(() => dispatch({
      type: POST_DETAILS_RECEIVE,
      payload: { error: 'There was a problem fetching post id, try again later!' }
    }));
};

export const getPostCommentsById = (dispatch, id) => {
  dispatch({ type: POST_DETAILS_COMMENTS_REQUEST });

  postsApi.getCommentsById(id)
    .then(data => dispatch({
      type: POST_DETAILS_COMMENTS_RECEIVE,
      payload: { data }
    }))
    .catch(() => dispatch({
      type: POST_DETAILS_COMMENTS_RECEIVE,
      payload: { error: 'There was a problem fetching post id comments, try again later!' }
    }));
};

export const votePost = (dispatch, id, option) =>
  postsApi.voteById(id, option)
    .then(data => dispatch({
      type: POST_DETAILS_VOTE,
      payload: { data }
    }))
    .catch(() => dispatch({
      type: POST_DETAILS_VOTE,
      payload: { error: 'There was a problem to vote in post, try again later!' }
    }));

export const deletePost = (dispatch, id) =>
  postsApi.deleteById(id)
    .then(data => dispatch({
      type: POST_DETAILS_DELETE,
      payload: { data }
    }))
    .catch(() => dispatch({
      type: POST_DETAILS_DELETE,
      payload: { error: 'There was a problem to delete post, try again later!' }
    }));

export const createComment = (dispatch, data) =>
  commentsApi.create(data)
    .then(data => dispatch({
      type: POST_DETAILS_COMMENT_CREATE,
      payload: { data }
    }))
    .catch(() => dispatch({
      type: POST_DETAILS_COMMENT_CREATE,
      payload: { error: 'There was a problem to create comment, try again later!' }
    }));

export const editComment = (dispatch, id, data) =>
  commentsApi.updateById(id, data)
    .then(data => dispatch({
      type: POST_DETAILS_COMMENT_EDIT,
      payload: { data }
    }))
    .catch(() => dispatch({
      type: POST_DETAILS_COMMENT_EDIT,
      payload: { error: 'There was a problem to edit comment, try again later!' }
    }));

export const voteComment = (dispatch, id, option) =>
  commentsApi.voteById(id, option)
    .then(data => dispatch({
      type: POST_DETAILS_COMMENT_VOTE,
      payload: { data }
    }))
    .catch(() => dispatch({
      type: POST_DETAILS_COMMENT_VOTE,
      payload: { error: 'There was a problem to vote in comment, try again later!' }
    }));

export const deleteComment = (dispatch, id) =>
  commentsApi.deleteById(id)
    .then(data => dispatch({
      type: POST_DETAILS_COMMENT_DELETE,
      payload: { data }
    }))
    .catch(() => dispatch({
      type: POST_DETAILS_COMMENT_DELETE,
      payload: { error: 'There was a problem to delete comment, try again later!' }
    }));
