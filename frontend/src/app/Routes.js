import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from '../details/PostDetails';
import PostList from '../list/PostList';

export default () => (
  <Switch>
    <Route exact path="/" component={ PostList } />
    <Route exact path="/:category" component={ props => <PostList { ...props } /> } />

    <Route exact path="/:category/:postId" component={ PostDetails } />

    <Redirect from="*" to="/" />
  </Switch>
);
