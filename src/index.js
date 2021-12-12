import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import { gameStore } from './store/gameStore';

ReactDOM.render(
  <Provider store={gameStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
