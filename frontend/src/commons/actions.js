import { getAll } from '../utils/CategoriesApi';

export const CATEGORY_LIST_REQUEST = 'CATEGORY_LIST_REQUEST';
export const CATEGORY_LIST_RECEIVE = 'CATEGORY_LIST_RECEIVE';

export const getCategories = (dispatch) => {
  dispatch({ type: CATEGORY_LIST_REQUEST });

  getAll()
    .then(({ categories: list }) => dispatch({
      type: CATEGORY_LIST_RECEIVE,
      payload: {
        categories: { list }
      }
    }))
    .catch(() => dispatch({
      type: CATEGORY_LIST_RECEIVE,
      payload: {
        categories: { error: 'There was a problem fetching categories, try again later!' }
      }
    }));
};
