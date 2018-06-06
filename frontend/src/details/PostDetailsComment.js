import React, { Component, Fragment } from 'react';
import serializeForm from 'form-serialize';
import moment from 'moment';

import Typography from 'material-ui/Typography';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';

import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';

class PostDetailsComment extends Component {
  state = {
    editing: null
  };

  constructor(props) {
    super(props);

    this.handlerEdit = this.handlerEdit.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerEdit(id) {
    this.setState({ editing: id });
  }

  handlerSubmit(event) {
    event.preventDefault();

    const { id, body } = serializeForm(event.target, { hash: true });

    this.props.onEdit(id, { body });
    this.setState({ editing: null });
  }

  render() {
    const { comment, onVoteScore, onDelete } = this.props;
    const { editing } = this.state;

    return (
      comment.deleted ? null : (
        <Fragment>
          <ListItem className="post-comment__item post-comment__item-header">
            <Avatar>{ comment.author.charAt(0).toUpperCase() }</Avatar>
            <ListItemText primary={ comment.author } secondary={ `${moment(comment.timestamp).format('DD MMM, YYYY')} | ${comment.voteScore} votes` } />
          </ListItem>
          <ListItem className="post-comment__item post-comment__item-content">
            { editing !== comment.id ? <Typography variant="body1">{ comment.body }</Typography> : (
              <form
                className="post-comment__item-form"
                onSubmit={ this.handlerSubmit }
              >
                <input type="hidden" name="id" value={ comment.id }/>

                <Input
                  name="body"
                  defaultValue={ comment.body }
                  className="post-comment__item-form-input"
                />

                <Button
                  mini
                  variant="fab"
                  color="primary"
                  type="submit"
                  className="post-comment__item-form-button"
                >
                  <EditIcon />
                </Button>
              </form>
            ) }
          </ListItem>
          <ListItem className="post-comment__item post-comment__item-actions">
            <Button size="small" onClick={ () => onVoteScore(comment.id, 'upVote') }><ThumbUpIcon /></Button>
            <Button size="small" onClick={ () => onVoteScore(comment.id, 'downVote') }><ThumbDownIcon /></Button>
            <Button size="small" onClick={ () => this.handlerEdit(comment.id) }><EditIcon /></Button>
            <Button size="small" onClick={ () => onDelete(comment.id) }><DeleteIcon /></Button>
          </ListItem>
        </Fragment>
      )
    );
  }
}

export default PostDetailsComment;
