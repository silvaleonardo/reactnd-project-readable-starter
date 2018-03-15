import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

import ArrowUpwardIcon from 'material-ui-icons/ArrowUpward';
import ArrowDownwardIcon from 'material-ui-icons/ArrowDownward';

class PostListOrderBy extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: () => {}
  };

  state = {
    orderBy: ''
  };

  handlerChange(event) {
    this.setState(
      { orderBy: event.target.value},
      () => this.props.onChange(this.state.orderBy)
    );
  }

  render() {
    const { orderBy } = this.state;

    return (
      <Paper className="order-by">
        <FormControl className="order-by__form-control">
          <InputLabel htmlFor="order-by">Order by:</InputLabel>

          <Select
            value={ orderBy }
            onChange={ (evt) => this.handlerChange(evt) }
            inputProps={ { name: 'orderby', id: 'order-by' } }
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="timestamp">Date <ArrowUpwardIcon className="order-by__icon" /></MenuItem>
            <MenuItem value="-timestamp">Date <ArrowDownwardIcon className="order-by__icon" /></MenuItem>
            <MenuItem value="voteScore">Vote Score <ArrowUpwardIcon className="order-by__icon" /></MenuItem>
            <MenuItem value="-voteScore">Vote Score <ArrowDownwardIcon className="order-by__icon" /></MenuItem>
          </Select>
        </FormControl>
      </Paper>
    );
  };
}

export default PostListOrderBy;
