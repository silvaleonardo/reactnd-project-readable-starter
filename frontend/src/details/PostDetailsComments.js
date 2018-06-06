import React, { Component } from 'react';
import serializeForm from 'form-serialize';

import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import List from 'material-ui/List';
import Button from 'material-ui/Button';

import AddIcon from 'material-ui-icons/Add';

import Loading from '../commons/Loading';
import SnackbarMessage from '../commons/SnackbarMessage';
import PostDetailsComment from './PostDetailsComment';

class PostDetailsComments extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = serializeForm(event.target, { hash: true });

    this.props.onCreate(formData);

    event.target.reset();
  }

  render() {
    const { comments: { loading, error, data }, parentId, onEdit, onVoteScore, onDelete } = this.props;

    return (
      <section className="post-comments">
        <header className="post-comments__header">
          <Typography variant="subheading" component="h4">Comments</Typography>
        </header>

        <section className="post-comments__form-comment">
          <Typography variant="subheading" component="h4">Add comment</Typography>

          <form
            className="form-comment__form"
            onSubmit={ this.handleSubmit }
          >
            <TextField
              className="form-comment__form-field"
              name="author"
              type="text"
              label="Author"
            />

            <TextField
              className="form-comment__form-field"
              name="body"
              type="text"
              label="Comment"
            />

            <input type="hidden" name="parentId" value={ parentId } />

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

        <section className={ `post-comments__content` }>
          { loading ? (
            <div className="post-comments__content-loading">
              <Loading />
            </div>
          ) : (
            <List className="post-comments__list">
              { data.map(comment =>
                <PostDetailsComment
                  key={ comment.id }
                  comment={ comment }
                  onEdit={ onEdit }
                  onVoteScore={ onVoteScore }
                  onDelete={ onDelete }
                />
              ) }
            </List>
          ) }
        </section>

        <SnackbarMessage message={ error } />
      </section>
    );
  }
}

export default PostDetailsComments;
