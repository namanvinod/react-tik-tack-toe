const gameAction = (type, payload) => ({ type, payload });

const addNewGame = payload => (gameAction('ADD_NEW_GAME', payload));

const addNewMove = payload => (gameAction('ADD_NEW_MOVE', payload)); 

const updateWinner = payload => (gameAction('UPDATE_WINNER', payload));

const resetCurrentGame = () => ({ type: 'RESET_CURRENT_GAME' });

export {
    addNewGame,
    addNewMove,
    updateWinner,
    resetCurrentGame
};