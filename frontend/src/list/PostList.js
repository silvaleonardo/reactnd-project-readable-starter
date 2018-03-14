import React, { Component } from 'react';

import Grid from 'material-ui/Grid';

import PostListOrderBy from './PostListOrderBy';
import PostListCard from './PostListCard';

const mockListPosts = [];

for(let i = 0; i < 9; i++) {
  mockListPosts.push({
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    commentCount: 2
  });
}

class PostList extends Component {
  constructor(props) {
    super(props);

    this.handlerChangeOrderBy = this.handlerChangeOrderBy.bind(this);
    this.handlerChangeVote = this.handlerChangeVote.bind(this);
    this.handlerPostDelete = this.handlerPostDelete.bind(this);
  }

  handlerChangeOrderBy(orderBy) {
    console.log(`Order by: '${orderBy}'`);
  }

  handlerChangeVote(id, type) {
    console.log(`Vote score: '${type}' (${id})`);
  }

  handlerPostDelete(id) {
    console.log(`Post id: '${id}'`);
  }

  render() {
    return (
      <section className="posts-list">
        <PostListOrderBy onChange={ this.handlerChangeOrderBy } />

        <Grid container className="posts-list__content">
          { mockListPosts.map((post, index) => (
            <Grid item xs={4} key={ index }>
              <PostListCard
                data={ post }
                onVoteScore={ this.handlerChangeVote }
                onDelete={ this.handlerPostDelete }
              />
            </Grid>
          )) }
        </Grid>
      </section>
    );
  }
};

export default PostList;
