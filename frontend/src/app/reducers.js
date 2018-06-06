import { combineReducers } from 'redux';

import Commons from '../commons/reducer';
import PostList from '../list/reducer';
import PostDetails from '../details/reducer';

export default combineReducers({
  Commons,
  PostList,
  PostDetails
});
