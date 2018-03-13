import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';

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
      >
        Readable
      </Typography>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  menuToggleClick: PropTypes.func.isRequired
};

export default Header;
