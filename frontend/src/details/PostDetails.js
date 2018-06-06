import React, { Component } from 'react';
import moment from 'moment';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import PostDetailsActions from './PostDetailsActions';
import PostDetailsComments from './PostDetailsComments';

class PostDetails extends Component {
  render() {
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
              Udacity is the best place to learn React <small>(React)</small>
            </Typography>

            <Typography
              className="post-details__header-subtitle"
              variant="subheading"
            >
              { `${moment(1467166872634).format('DD/MM/YYYY')} | thingtwo` }
            </Typography>

            <Typography
              className="post-details__header-subtitle"
              variant="caption"
            >
              Votes: 6 | Comments: 2
            </Typography>
          </Grid>

          <Grid
            item
            xs={4}
            component={ PostDetailsActions }
            editLink={ `/react/1/edit` }
            onVoteScore={ () => {} }
            onDelete={ () => {} }
          />
        </Grid>

        <section className="post-details__content">
          <Typography paragraph>
            Everyone says so after all.
          </Typography>
        </section>

        <PostDetailsComments />
      </Paper>
    );
  }
}

export default PostDetails;
