import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PostList from '../list/PostList';

export default () => (
  <Switch>
    <Route exact path="/" component={ PostList } />
    <Route exact path="/:category" component={ props => <PostList { ...props } /> } />

    <Redirect from="*" to="/" />
  </Switch>
);
