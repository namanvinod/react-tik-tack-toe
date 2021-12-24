import { combineReducers } from 'redux';

import gameReducer from './gameReducer';
import sessionReducer from './sessionReducer';

export default combineReducers({ game: gameReducer, session: sessionReducer });