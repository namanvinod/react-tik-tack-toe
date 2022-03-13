import { GAME_STATE, PLAYERS } from "../core/enum";

const currentGameInitValue = {
    moveSet: [],
    winner: '',
    gameState: GAME_STATE.NEW,
    currentPlayer: PLAYERS.X
};

export const gameStoreInitValue = { 
    games: [], 
    currentGame: currentGameInitValue
};

const gameReducer = (state = gameStoreInitValue, { type, payload }) => {
    switch(type) {
        case 'ADD_CURRENTGAME_TO_GAMES': {
            return { 
                ...state, 
                games: [
                    ...state.games, 
                    state.currentGame
                ] 
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
        case 'UPDATE_SQUARES': {
            return {
                ...state,
                currentGame: {
                    ...state.currentGame,
                    moveSet: [ ...payload.squares ]
                }
            };
        }
        case 'UPDATE_GAME_STATE': {
            return {
                ...state,
                currentGame: {
                    ...state.currentGame,
                    winner: payload.winner,
                    gameState: payload.gameState,
                    currentPlayer: payload.currentPlayer
                }
            };
        }
        case 'UPDATE_CURRENT_PLAYER': {
            return {
                ...state,
                currentGame: {
                    ...state.currentGame,
                    currentPlayer: payload.currentPlayer
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