const gameAction = (type, payload) => ({ type, payload });

const addNewGame = payload => (gameAction('ADD_NEW_GAME', payload));

const addNewMove = payload => (gameAction('ADD_NEW_MOVE', payload)); 

const updateGameState = payload => (gameAction('UPDATE_GAME_STATE', payload));

const updateCurrentPlayer = payload => (gameAction('UPDATE_CURRENT_PLAYER', payload));

const resetCurrentGame = () => ({ type: 'RESET_CURRENT_GAME' });

export {
    addNewGame,
    addNewMove,
    updateGameState,
    updateCurrentPlayer,
    resetCurrentGame
};