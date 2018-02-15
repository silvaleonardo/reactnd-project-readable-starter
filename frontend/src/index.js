import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './app/store';
import './index.css';
import App from './app/App';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
