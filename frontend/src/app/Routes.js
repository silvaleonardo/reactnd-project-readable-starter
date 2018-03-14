import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PostsList from '../PostsList';

export default () => (
  <Switch>
    <Route exact path="/" component={ PostsList } />
    <Route exact path="/:category" component={ PostsList } />

    <Redirect from="*" to="/" />
  </Switch>
);
