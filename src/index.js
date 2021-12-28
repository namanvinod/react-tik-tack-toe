import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import App from './App';
import Popup from './core/components/pop-up';
import Login from './components/login/login';

import { gameStore } from './store/gameStore';

ReactDOM.render(
  <Provider store={gameStore}>
    <App />
    <Popup 
      show={true}
    >
      <Login />
    </Popup>
  </Provider>,
  document.getElementById('root')
);
