import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import Loading from '../commons/Loading';
import SnackbarMessage from '../commons/SnackbarMessage';
import PostDetailsActions from './PostDetailsActions';
import PostDetailsComments from './PostDetailsComments';

import { getPostById, getPostCommentsById, votePost, deletePost, createComment, editComment, voteComment, deleteComment } from './actions';

class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.handlerPostChangeVote = this.handlerPostChangeVote.bind(this);
    this.handlerPostDelete = this.handlerPostDelete.bind(this);
    this.handlerCommentCreate = this.handlerCommentCreate.bind(this);
    this.handlerCommentEdit = this.handlerCommentEdit.bind(this);
    this.handlerCommentChangeVote = this.handlerCommentChangeVote.bind(this);
    this.handlerCommentDelete = this.handlerCommentDelete.bind(this);
  }

  componentWillMount() {
    const { params: { postId } } = this.props.match;

    this.props.getPostById(postId);
    this.props.getPostCommentsById(postId);
  }

  handlerPostChangeVote(type) {
    const { params: { postId } } = this.props.match;

    this.props.votePost(postId, type);
  }

  handlerPostDelete() {
    const { params: { postId } } = this.props.match;

    this.props.deletePost(postId);
  }

  handlerCommentCreate(data) {
    this.props.createComment(data);
  }

  handlerCommentEdit(id, data) {
    this.props.editComment(id, data);
  }

  handlerCommentChangeVote(id, type) {
    this.props.voteComment(id, type);
  }

  handlerCommentDelete(id) {
    this.props.deleteComment(id);
  }

  renderLoading() {
    return (
      <div className="post-details__loading">
        <Loading />
      </div>
    );
  }

  render() {
    const { post: { loading, error, data }, comments } = this.props;

    if (loading || (!error && !data)) return this.renderLoading();
    if (error) return <SnackbarMessage message={ error } />;

    if (data.title && data.deleted) return <Redirect to="/" />;
    if (!data.title || data.deleted) return <Redirect to="/not-found" />;

    return (
      <Paper
        className="post-details"
        component="section"
      >
        <Grid
          className="post-details__header"
          component="header"
          container
        >
          <Grid item xs={8}>
            <Typography
              className="post-details__header-title"
              variant="title"
            >
              { data.title } <small>({ data.category })</small>
            </Typography>

            <Typography
              className="post-details__header-subtitle"
              variant="subheading"
            >
              { `${moment(data.timestamp).format('DD/MM/YYYY')} | ${data.author}` }
            </Typography>

            <Typography
              className="post-details__header-subtitle"
              variant="caption"
            >
              Votes: { data.voteScore } | Comments: { data.commentCount }
            </Typography>
          </Grid>

          <Grid
            item
            xs={4}
            component={ PostDetailsActions }
            editLink={ `/${data.category}/${data.id}/edit` }
            onVoteScore={ this.handlerPostChangeVote }
            onDelete={ this.handlerPostDelete }
          />
        </Grid>

        <section className="post-details__content">
          <Typography paragraph>
            { data.body }
          </Typography>
        </section>

        <PostDetailsComments
          comments={ comments }
          parentId={ data.id }
          onCreate={ this.handlerCommentCreate }
          onEdit={ this.handlerCommentEdit }
          onVoteScore={ this.handlerCommentChangeVote }
          onDelete={ this.handlerCommentDelete }
        />
      </Paper>
    );
  }
}

const mapStateToProps = ({ PostDetails: { post, comments } }) => ({
  post,
  comments
});

const mapDispatchToProps = dispatch => ({
  getPostById: id => getPostById(dispatch, id),
  getPostCommentsById: id => getPostCommentsById(dispatch, id),
  votePost: (id, option) => votePost(dispatch, id, option),
  deletePost: id => deletePost(dispatch, id),
  createComment: data => createComment(dispatch, data),
  editComment: (id, data) => editComment(dispatch, id, data),
  voteComment: (id, option) => voteComment(dispatch, id, option),
  deleteComment: id => deleteComment(dispatch, id)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
