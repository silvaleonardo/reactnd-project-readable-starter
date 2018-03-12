import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

import Header from './Header';
import Navbar from './Navbar';

class Layout extends Component {
  state = {
    navBarOpened: false
  };

  constructor(props) {
    super(props);

    this.menuToggleClick = this.menuToggleClick.bind(this);
  }

  menuToggleClick() {
    this.setState(({ navBarOpened }) => ({
      navBarOpened: !navBarOpened
    }));
  }

  render() {
    const { children } = this.props;
    const { navBarOpened } = this.state;

    return (
      <div className={ classnames({ 'app-layout': true, 'menu-opened': navBarOpened }) }>
        <Header menuToggleClick={ this.menuToggleClick } />

        <Navbar
          isOpen={ navBarOpened }
          menuClose={ this.menuToggleClick }
        />

        <main className="app-main">
          { children }
        </main>
      </div>
    );
  }
}

export default Layout;
