import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PostList from '../PostList';

export default () => (
  <Switch>
    <Route exact path="/" component={ PostList } />
    <Route exact path="/:category" component={ PostList } />

    <Redirect from="*" to="/" />
  </Switch>
);
