import React from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

const Navbar = ({ isOpen, onClose, menuClose }) => (
  <Drawer
    className="app-navbar"
    variant="persistent"
    anchor="left"
    open={ isOpen }
    onClose={ onClose }
  >
    <div className="app-navbar__header">
      <IconButton onClick={ () => menuClose() }>
        <ChevronLeftIcon />
      </IconButton>
    </div>

    <Divider />

    <div className="app-navbar__content">
      <List className="app-navbar__list">
        <ListItem button>
          <ListItemText primary="Test item 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Test item 2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Test item 3" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Test item 4" />
        </ListItem>
      </List>
    </div>
  </Drawer>
);

Navbar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  menuClose: PropTypes.func
};

Navbar.defaultProps = {
  isOpen: false,
  onClose: () => {},
  menuClose: () => {}
};

export default Navbar;
