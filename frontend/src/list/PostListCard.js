import React from 'react';
import { Link } from 'react-router-dom';
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

const PostListCard = ({ data, onVoteScore, onEdit, onDelete }) => (
  <Card className="post-card">
    <CardHeader
      avatar={ <Avatar>{ data.title.charAt(0).toUpperCase() }</Avatar> }
      title={ <Link to={ `/${data.category}/${data.id}` }>{ data.title }</Link> }
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
            onClick={ () => onVoteScore(data.id, 'upVote') }
          >
            <ThumbUpIcon />
          </IconButton>
        </Grid>
        <Grid item xs className="post-card__grid-item">
          <IconButton
            className="post-card__btn-action"
            onClick={ () => onVoteScore(data.id, 'downVote') }
          >
            <ThumbDownIcon />
          </IconButton>
        </Grid>
        <Grid item xs className="post-card__grid-item">
          <IconButton
            className="post-card__btn-action"
            component={ Link }
            to={ `/${data.category}/${data.id}/edit` }
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

PostListCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired
  }).isRequired,
  onVoteScore: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default PostListCard;
