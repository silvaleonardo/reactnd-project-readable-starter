import React, { Fragment } from 'react';

import Typography from 'material-ui/Typography';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';

import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';

const PostDetailsComment = () => (
  <Fragment>
    <ListItem className="post-comment__item post-comment__item-header">
      <Avatar>T</Avatar>
      <ListItemText primary="thingtwo" secondary="Jan 9, 2018 | 6 votes" />
    </ListItem>
    <ListItem className="post-comment__item post-comment__item-content">
      <Typography variant="body1">Hi there! I am a COMMENT.</Typography>
    </ListItem>
    <ListItem className="post-comment__item post-comment__item-actions">
      <Button size="small"><ThumbUpIcon /></Button>
      <Button size="small"><ThumbDownIcon /></Button>
      <Button size="small"><EditIcon /></Button>
      <Button size="small"><DeleteIcon /></Button>
    </ListItem>
  </Fragment>
);

export default PostDetailsComment;
