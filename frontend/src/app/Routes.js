import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from '../details/PostDetails';
import PostForm from '../form/PostForm';
import PostList from '../list/PostList';
import PostNotFound from '../not-found/PostNotFound';

const rerender = Component =>
  props => <Component { ...props } />;

export default () => (
  <Switch>
    <Route exact path="/" component={ rerender(PostList) } />

    <Route exact path="/create" component={ rerender(PostForm) } />

    <Route exact path="/not-found" component={ PostNotFound } />

    <Route exact path="/:category" component={ rerender(PostList) } />
    <Route exact path="/:category/:postId" component={ rerender(PostDetails) } />
    <Route exact path="/:category/:postId/edit" component={ rerender(PostForm) } />

    <Redirect from="*" to="/not-found" />
  </Switch>
);
