const gameAction = (type, payload) => ({ type, payload });

const addCurrentGameToGames = payload => (gameAction('ADD_CURRENTGAME_TO_GAMES', payload));

const addNewMove = payload => (gameAction('ADD_NEW_MOVE', payload)); 

const updateSquares = payload => (gameAction('UPDATE_SQUARES', payload));

const updateGameState = payload => (gameAction('UPDATE_GAME_STATE', payload));

const updateCurrentPlayer = payload => (gameAction('UPDATE_CURRENT_PLAYER', payload));

const resetCurrentGame = () => ({ type: 'RESET_CURRENT_GAME' });

export {
    addCurrentGameToGames,
    addNewMove,
    updateSquares,
    updateGameState,
    updateCurrentPlayer,
    resetCurrentGame
};