import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';

import Loading from '../commons/Loading';
import SnackbarMessage from '../commons/SnackbarMessage';
import PostListOrderBy from './PostListOrderBy';
import PostListCard from './PostListCard';

import { getPosts, sortPosts, votePost, deletePost } from './actions';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.handlerChangeOrderBy = this.handlerChangeOrderBy.bind(this);
    this.handlerChangeVote = this.handlerChangeVote.bind(this);
    this.handlerPostDelete = this.handlerPostDelete.bind(this);
  }

  componentWillMount() {
    const { params: { category } } = this.props.match;

    this.props.getPosts(category);
  }

  handlerChangeOrderBy(orderBy) {
    this.props.sortPosts(orderBy);
  }

  handlerChangeVote(id, type) {
    this.props.votePost(id, type);
  }

  handlerPostDelete(id) {
    this.props.deletePost(id);
  }

  render() {
    const { loading, error, list } = this.props;

    return (
      <section className="posts-list">
        <PostListOrderBy onChange={ this.handlerChangeOrderBy } />

        <Grid container className="posts-list__content">
          { loading ? (
            <Loading />
          ) : (
            !list.length ? (
              <Grid item xs={12} className="posts-list__not-found">
                No posts found!
              </Grid>
            ) : (
              list.map((post, index) => (
                <Grid item xs={4} key={ `${post.id}-${index}` }>
                  <PostListCard
                    data={ post }
                    onVoteScore={ this.handlerChangeVote }
                    onDelete={ this.handlerPostDelete }
                  />
                </Grid>
              ))
            )
          ) }
        </Grid>

        <SnackbarMessage message={ error } />
      </section>
    );
  }
};

const mapStateToProps = ({ PostList: { loading, error, list } }) => ({
  loading,
  error,
  list
});

const mapDispatchToProps = dispatch => ({
  getPosts: category => getPosts(dispatch, category),
  sortPosts: orderBy => sortPosts(dispatch, orderBy),
  votePost: (id, option) => votePost(dispatch, id, option),
  deletePost: id => deletePost(dispatch, id)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
