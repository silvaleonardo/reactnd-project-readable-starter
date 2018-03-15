import { combineReducers } from 'redux';

import Commons from '../commons/reducer';
import PostList from '../list/reducer';

export default combineReducers({
  Commons,
  PostList
});
