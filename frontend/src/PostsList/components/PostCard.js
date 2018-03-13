import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Grid from 'material-ui/Grid';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';

import StarIcon from 'material-ui-icons/Star';
import CommentIcon from 'material-ui-icons/Comment';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';

class PostCard extends Component {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      voteScore: PropTypes.number.isRequired,
      commentCount: PropTypes.number.isRequired
    }).isRequired,
    onVoteScore: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const { data, onVoteScore, onEdit, onDelete } = this.props;

    return (
      <Card className="post-card">
        <CardHeader
          avatar={ <Avatar>{ data.title.charAt(0).toUpperCase() }</Avatar> }
          title={ data.title }
          subheader={ `${moment(data.timestamp).format('DD/MM/YYYY')} | ${data.author}` }
        />

        <Divider />

        <CardContent>
          <Grid container>
            <Grid item xs className="post-card__grid-item">
              <Chip
                className="post-card__chip"
                avatar={ <Avatar><StarIcon /></Avatar> }
                label={ data.voteScore }
              />
            </Grid>

            <Grid item xs className="post-card__grid-item">
              <Chip
                className="post-card__chip"
                avatar={ <Avatar><CommentIcon /></Avatar> }
                label={ data.commentCount }
              />
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container>
            <Grid item xs className="post-card__grid-item">
              <IconButton
                className="post-card__btn-action"
                onClick={ () => onVoteScore('upVote') }
              >
                <ThumbUpIcon />
              </IconButton>
            </Grid>
            <Grid item xs className="post-card__grid-item">
              <IconButton
                className="post-card__btn-action"
                onClick={ () => onVoteScore('downVote') }
              >
                <ThumbDownIcon />
              </IconButton>
            </Grid>
            <Grid item xs className="post-card__grid-item">
              <IconButton
                className="post-card__btn-action"
                onClick={ () => onEdit(data.id) }
              >
                <EditIcon />
              </IconButton>
            </Grid>
            <Grid item xs className="post-card__grid-item">
              <IconButton
                className="post-card__btn-action"
                onClick={ () => onDelete(data.id) }
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
  };
}

export default PostCard;