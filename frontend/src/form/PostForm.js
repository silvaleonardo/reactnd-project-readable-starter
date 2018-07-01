import React, { Component } from 'react';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize';

import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';

import Loading from '../commons/Loading';
import SnackbarMessage from '../commons/SnackbarMessage';

import { createPost, getPostById, editPost, cleanPost } from './actions';

const initialState = {
  editing: false,
  title: '',
  author: '',
  category: '',
  body: ''
};

class PostForm extends Component {
  state = {
    ...initialState
  };

  constructor(props) {
    super(props);

    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerClean = this.handlerClean.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }

  componentWillMount() {
    const { params: { postId } } = this.props.match;

    this.props.cleanPost();

    if (postId) this.setState({ editing: true },
      this.props.getPostById(postId));
  }

  componentWillReceiveProps(props, state) {
    if (!!props.data.title && !state.title) {
      this.setState({
        ...props.data
      });
    }

    return true;
  }

  handlerSubmit(event) {
    event.preventDefault();

    const { params: { postId } } = this.props.match;
    const formData = serializeForm(event.target, { hash: true });

    if (postId) {
      this.props.editPost(postId, formData);
    } else {
      this.props.createPost(formData);
      this.handlerClean();
    }
  }

  handlerClean() {
    const { data } = this.props;
    const state = !!data.title ? data : initialState;

    this.setState({ ...state });
  }

  handlerChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { loading, error, message, data: { author: propAuthor, category: propCategory }, categories } = this.props;
    const { editing, title, author, category, body } = this.state;

    return (
      <Paper
        className="post-form"
        component="section"
      >
        <header className="post-form__header">
          <Typography
            className="post-form__header-title"
            variant="title"
          >
            Create Post
          </Typography>
        </header>

        <Divider className="post-form__divider" />

        <section className="post-form__content">
          { loading ? (
            <div className="post-form__loading">
              <Loading />
            </div>
          ) : (
            <Grid
              container
              component="form"
              onSubmit={ this.handlerSubmit }
            >
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  name="title"
                  label="Title"
                  value={ title }
                  onChange={ this.handlerChange }
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  name="author"
                  label="Author"
                  value={ author }
                  onChange={ this.handlerChange }
                  disabled={ editing }
                />
              </Grid>

              <Grid item xs={6}>
                { categories.loading ? (
                  <div className="post-form__loading">
                    <Loading />
                  </div>
                ) : (
                  <FormControl className="post-form__full-width">
                    <InputLabel htmlFor="category-select">Category</InputLabel>

                    <Select
                      required
                      disabled={ editing }
                      onChange={ this.handlerChange }
                      value={ category }
                      inputProps={ {
                        name: 'category',
                        id: 'category-select'
                      } }
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>

                      { categories.list.map(item => <MenuItem key={ item.path } value={ item.path }>{ item.name }</MenuItem>) }
                    </Select>
                  </FormControl>
                ) }
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  name="body"
                  label="Body"
                  value={ body }
                  onChange={ this.handlerChange }
                />
              </Grid>

              <Grid item xs={12} className="post-form__content-buttons">
                <Button type="submit" variant="raised" size="small" color="primary">Save</Button>
                <Button onClick={ () => window.history.back() } variant="raised" size="small" color="secondary">Cancel</Button>
                <Button onClick={ () => this.handlerClean() } variant="raised" size="small" color="default">Clean</Button>
              </Grid>
            </Grid>
          ) }
        </section>

        <SnackbarMessage message={ error || message } />
      </Paper>
    );
  }
}

const mapStateToProps = ({ PostForm: { loading, error, message, data }, Commons: { categories } }) => ({
  loading,
  error,
  message,
  data,
  categories
});

const mapDispatchToProps = dispatch => ({
  createPost: data => createPost(dispatch, data),
  getPostById: id => getPostById(dispatch, id),
  editPost: (id, data) => editPost(dispatch, id, data),
  cleanPost: () => cleanPost(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
