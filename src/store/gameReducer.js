const gameStoreInitValue = { 
    games: [], 
    currentGame: {}
};

const gameReducer = (state = gameStoreInitValue, { type, payload }) => {
    switch(type) {
        case 'ADD_NEW_GAME': {
            console.log('New Game Added', state.games, payload);
            return { ...state, currentGame: {}, games: [...state.games, payload] };
        }
        case 'ADD_NEW_MOVE': {

        }
        case 'RESET_CURRENT_GAME': {
            console.log('Game Reset');
            return { ...state, currentGame: {} };
        }
        default: return { ...state }; 
    }
};

export default gameReducer;