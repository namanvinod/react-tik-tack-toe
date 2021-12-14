import { GAME_STATE } from "../core/enum";

const currentGameInitValue = {
    moveSet: [],
    winner: '',
    gameState: GAME_STATE.NEW
};

const gameStoreInitValue = { 
    games: [], 
    currentGame: currentGameInitValue
};

const gameReducer = (state = gameStoreInitValue, { type, payload }) => {
    switch(type) {
        case 'ADD_NEW_GAME': {
            return { 
                ...state, 
                games: [
                    ...state.games, 
                    payload
                ], 
                currentGame: currentGameInitValue 
            };
        }
        case 'ADD_NEW_MOVE': {
            return { 
                ...state, 
                currentGame: { 
                    ...state.currentGame, 
                    moveSet: [ ...payload.moveSet ]     
                }
            };
        }
        case 'UPDATE_GAME_STATE': {
            return {
                ...state,
                currentGame: {
                    ...state.currentGame,
                    winner: payload.winner,
                    gameState: payload.gameState
                }
            };
        }
        case 'RESET_CURRENT_GAME': {
            return { 
                ...state, 
                currentGame: currentGameInitValue 
            };
        }
        default: return { ...state }; 
    }
};

export default gameReducer;