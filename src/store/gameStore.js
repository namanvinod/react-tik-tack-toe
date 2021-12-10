import { configureStore } from '@reduxjs/toolkit';

import gameReducer from './gameReducer';

export const gameStore = configureStore({
    reducer: gameReducer
}); 