import { combineReducers } from 'redux';

import gameReducer, { gameStoreInitValue } from './gameReducer';
import sessionReducer, { defaultSessionState } from './sessionReducer';

export default combineReducers({ game: gameReducer, session: sessionReducer });

export const defaultState = {
    game: gameStoreInitValue,
    session: defaultSessionState
}