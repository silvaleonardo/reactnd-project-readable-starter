import React, { Component } from 'react';

import Grid from 'material-ui/Grid';

import OrderBy from './components/OrderBy';
import PostCard from './components/PostCard';

const mockListPosts = [];

for(let i = 0; i < 9; i++) {
  mockListPosts.push({
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    author: 'thingtwo',
    voteScore: 6,
    commentCount: 2
  });
}

class PostsList extends Component {
  constructor(props) {
    super(props);

    this.handlerChangeOrderBy = this.handlerChangeOrderBy.bind(this);
    this.handlerChangeVote = this.handlerChangeVote.bind(this);
    this.handlerPostEdit = this.handlerPostEdit.bind(this);
    this.handlerPostDelete = this.handlerPostDelete.bind(this);
  }

  handlerChangeOrderBy(orderBy) {
    console.log(`Order by: '${orderBy}'`);
  }

  handlerChangeVote(id, type) {
    console.log(`Vote score: '${type}' (${id})`);
  }

  handlerPostEdit(id) {
    console.log(`Post id: '${id}'`);
  }

  handlerPostDelete(id) {
    console.log(`Post id: '${id}'`);
  }

  render() {
    return (
      <section className="posts-list">
        <OrderBy onChange={ this.handlerChangeOrderBy } />

        <Grid container className="posts-list__content">
          { mockListPosts.map((post, index) => (
            <Grid item xs={4} key={ index }>
              <PostCard
                data={ post }
                onVoteScore={ this.handlerChangeVote }
                onEdit={ this.handlerPostEdit }
                onDelete={ this.handlerPostDelete }
              />
            </Grid>
          )) }
        </Grid>
      </section>
    );
  }
};

export default PostsList;
