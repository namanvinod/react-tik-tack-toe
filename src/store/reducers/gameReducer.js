const gameReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_NEW_GAME': {

        }
        case 'ADD_NEW_MOVE': {

        }
        case 'RESET_CURRECT_GAME': {

        }
        default: return [...state]; 
    }
};

export default gameReducer;