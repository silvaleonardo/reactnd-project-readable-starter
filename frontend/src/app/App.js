import React, { Component } from 'react';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to react!</h1>
        </header>
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}

export default App;
