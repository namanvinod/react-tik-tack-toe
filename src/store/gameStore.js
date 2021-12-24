import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import tickTackToeReducers from './tickTackToeReducers';

import asyncReducers from './async-reducers';

const sagaMiddleware = createSagaMiddleware();

export const gameStore = createStore(tickTackToeReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(asyncReducers);