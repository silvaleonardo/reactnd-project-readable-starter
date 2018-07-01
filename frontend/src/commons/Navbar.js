import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

import Loading from './Loading';

import { getCategories } from './actions';
import { capitalize } from '../utils/helpers';

class Navbar extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    menuClose: PropTypes.func
  };

  static defaultProps = {
    isOpen: false,
    onClose: () => {},
    menuClose: () => {}
  };

  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    const { isOpen, onClose, menuClose, categories: { loading, list } } = this.props;

    return (
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
          { loading ? (
            <div className="app-navbar__loading">
              <Loading />
            </div>
          ) : (
            <List className="app-navbar__list">
              <ListItem
                key="/"
                component={ Link }
                to="/"
                button
                onClick={ () => menuClose() }
              >
                All Categories
              </ListItem>

              { !list.length ? null : (
                list.map(({ name, path }) => (
                  <ListItem
                    key={ path }
                    component={ Link }
                    to={ `/${path}` }
                    button
                    onClick={ () => menuClose() }
                  >
                    { capitalize(name) }
                  </ListItem>
                ))
              ) }
            </List>
          ) }
        </div>
      </Drawer>
    );
  }
}

const mapStateToProps = ({ Commons: { categories } }) => ({
  categories: {
    loading: categories.loading,
    error: categories.error,
    list: categories.list
  }
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => getCategories(dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
