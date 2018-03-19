import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';

const ActionButton = ({ children, ...others }) => (
  <Button
    className="post-actions__button"
    variant="fab"
    color="default"
    mini
    { ...others }
  >
    { children }
  </Button>
);

const PostDetailsActions = ({ className, editLink, onVoteScore, onDelete }) => (
  <div className={ `${className} post-actions` }>
    <ActionButton onClick={ () => onVoteScore('upVote') }>
      <ThumbUpIcon />
    </ActionButton>

    <ActionButton onClick={ () => onVoteScore('downVote') }>
      <ThumbDownIcon />
    </ActionButton>

    <ActionButton
      color="primary"
      component={ Link }
      to={ editLink }
    >
      <EditIcon />
    </ActionButton>

    <ActionButton
      color="secondary"
      onClick={ () => onDelete() }
    >
      <DeleteIcon />
    </ActionButton>
  </div>
);

PostDetailsActions.propTypes = {
  className: PropTypes.string,
  editLink: PropTypes.string.isRequired,
  onVoteScore: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

PostDetailsActions.defaultProps = {
  className: ''
};

export default PostDetailsActions;
