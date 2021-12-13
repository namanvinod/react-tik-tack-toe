const currentGameInitValue = {
    steps: [],
    winner: ''
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
                    moveSet: [ ...payload.moveSet ],      
                    winner: payload.winner 
                }
            };
        }
        case 'UPDATE_WINNER': {
            return { 
                ...state, 
                currentGame: { 
                    ...state.currentGame, 
                    winner: payload.winner 
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