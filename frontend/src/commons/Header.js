import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import MenuIcon from 'material-ui-icons/Menu';
import AddIcon from 'material-ui-icons/Add';

const Header = ({ menuToggleClick }) => (
  <AppBar
    className="app-header"
    position="fixed"
  >
    <Toolbar>
      <IconButton
        className="app-header__btn-toggle"
        color="inherit"
        aria-label="Menu"
        onClick={ () => menuToggleClick() }
      >
        <MenuIcon />
      </IconButton>

      <Typography
        className="app-header__title"
        variant="title"
        color="inherit"
        component={ Link }
        to="/"
      >
        Readable
      </Typography>

      <Button
        className="app-header__btn-add"
        variant="fab"
        color="secondary"
        component={ Link }
        mini
        to="/create"
      >
        <AddIcon />
      </Button>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  menuToggleClick: PropTypes.func.isRequired
};

export default Header;
