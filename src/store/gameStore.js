import { createStore } from '@reduxjs/toolkit';

import tickTackToeReducers from './tickTackToeReducers';

export const gameStore = createStore(tickTackToeReducers);