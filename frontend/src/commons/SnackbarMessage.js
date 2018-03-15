import React, { Component } from 'react';

import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';

class SnackbarMessage extends Component {
  state = {
    open: true
  };

  componentWillReceiveProps() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { message } = this.props;
    const { open } = this.state;

    return (
      !message || !open ? null : (
        <Snackbar
          open
          message={ message }
          className="app-snackbar"
          anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
          autoHideDuration={ 6000 }
          onClose={ () => this.handleClose() }
          action={
            <Button
              color="secondary"
              size="small"
              onClick={ () => this.handleClose() }
            >
              Close
            </Button>
          }
        />
      )
    );
  }
}

export default SnackbarMessage;
