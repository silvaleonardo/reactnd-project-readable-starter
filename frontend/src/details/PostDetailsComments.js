import React, { Component } from 'react';

import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import List from 'material-ui/List';
import Button from 'material-ui/Button';

import AddIcon from 'material-ui-icons/Add';

import PostDetailsComment from './PostDetailsComment';

class PostDetailsComments extends Component {
  render() {
    return (
      <section className="post-comments">
        <header className="post-comments__header">
          <Typography variant="subheading" component="h4">Comments</Typography>
        </header>

        <section className="post-comments__form-comment">
          <Typography variant="subheading" component="h4">Add comment</Typography>

          <form className="form-comment__form">
            <TextField
              className="form-comment__form-field"
              id="author"
              type="text"
              label="Author"
            />

            <TextField
              className="form-comment__form-field"
              id="comment"
              type="text"
              label="Comment"
            />

            <Button
              mini
              variant="fab"
              color="primary"
              type="submit"
              className="form-comment__form-button"
            >
              <AddIcon />
            </Button>
          </form>
        </section>

        <section className="post-comments__content">
          <List className="post-comments__list">
            <PostDetailsComment />
            <PostDetailsComment />
            <PostDetailsComment />
            <PostDetailsComment />
          </List>
        </section>
      </section>
    );
  }
}

export default PostDetailsComments;
