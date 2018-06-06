import { combineReducers } from 'redux';

import Commons from '../commons/reducer';
import PostDetails from '../details/reducer';
import PostForm from '../form/reducer';
import PostList from '../list/reducer';

export default combineReducers({
  Commons,
  PostDetails,
  PostForm,
  PostList
});
